var tasks = {};

var createTask = function(taskText, taskDate, taskList) {
  // create elements that make up a task item
  var taskLi = $("<li>").addClass("list-group-item");//li .className for toDo
  var taskSpan = $("<span>")//span tag for date
    .addClass("badge badge-primary badge-pill")//span className
    .text(taskDate);
  var taskP = $("<p>")//p tag
    .addClass("m-1")//p className
    .text(taskText);

  // append span and p element to parent li
  taskLi.append(taskSpan, taskP);

  // check due date
  auditTask(taskLi);

  // append to ul list on the page
  $("#list-" + taskList).append(taskLi);//listထဲ ထည့်ရန်
};

var loadTasks = function() {//L-storageမှာ သိမ်းထားတဲ့ အချက်အလက်ကို ပြန်ယူ
  tasks = JSON.parse(localStorage.getItem("tasks"));//stringကို O/Arအဖြစ်ပြောင်း

  // if nothing in localStorage, create a new object to track all task status arrays
  if (!tasks) {//nullဖြစ်နေရင် tasksမရှိရင်
    tasks = {
      toDo: [],
      inProgress: [],
      inReview: [],
      done: []
    };//Ob ဖန်တီး
  }

  // loop over object properties JQuery methob each (tasks loop for object)
  $.each(tasks, function(list, arr) {//list=Pro-Name(toDo,--done), arr=property arr
    // then loop over sub-array
    arr.forEach(function(task) {//javascript forEach methob
      createTask(task.text, task.date, list);
    });
  });
};
//L-storageထဲ သိမ်းထားရန်
var saveTasks = function() {
  localStorage.setItem("tasks", //Key-V အနေနဲ့ dataကို သိမ်း(tasks=key)
    JSON.stringify(tasks));//stringify= O/Ar change to JSON string(tasks=value)
};

var auditTask = function(taskEl) {//ရက်ကို စစ်ဆေးခြင်း
  // get date from task element
  var date = $(taskEl)
    .find("span")//ရှာယူလာတဲ့date
    .text()//spanထဲက ရက်ကို စာသားထဲ ထည့်
    .trim();

  // string convert to moment object at 5:00pm (momet.js library)
  var time = moment(date, "L")//L=Long - DD,MM,YYYY အရှည်ထုတ်ပြ 17=5:00pmကို ဆိုလိုသည်
  .set("hour", 17);//ရက်စွဲကို အချိန်နဲ့အတူ စစ်ဆေးခြင်း

  // remove any old classes from element အဟောင်းကို ဖျက် အသစ်ထည့်ရန်
  $(taskEl).removeClass("list-group-item-warning list-group-item-danger");//class အားလုံးကိုဖယ်လိုက်ပါ

  // apply new class if task is near/over due date
  if (moment().isAfter(time)) {//သတ်မှတ်ချိန်ကျော်လွန်ရင် Dangerကို ပြပေးရန်အတွက်
    $(taskEl).addClass("list-group-item-danger");//အဝါရောင်မှ အရေးကြီးသော အချိန် အနီရောင်ပြောင်း
  } else if (Math.abs(moment().diff(time, "days")) <= 2) {//ရက်မကျော်လွန်သေးဘူးဆိုရင်
    $(taskEl).addClass("list-group-item-warning");//အချိန်နီးကပ်ရင် အဝါရောင်ပြောင်း
  }
};

// enable draggable/sortable feature on list-group elements
$(".card .list-group").sortable({
  // enable dragging across lists
  connectWith: $(".card .list-group"),//drag and drop ဥပမာ todo list to inPrograss list
  scroll: false,
  tolerance: "pointer",//sortable feature active
  helper: "clone",//copy
  activate: function(event, ui) {//မ-ရွှေတဲ့ချိန် drag start
    $(this).addClass("dropover");//Bg-Ch-Cl
    $(".bottom-trash").addClass("bottom-trash-drag");//drag လုပ်ချိန် အပြောင်းအလဲ
  },
  deactivate: function(event, ui) {//drag end
    $(this).removeClass("dropover");//အဟောင်းကို ဖျက်
    $(".bottom-trash").removeClass("bottom-trash-drag");
  },
  over: function(event) {//drag လုပ်နေစဥ် dropမည့်နေရာ ထောက်ကူ
    $(event.target).addClass("dropover-active");//နေရာဟောင်းမှာ အရောင်ပြောင်း
  },
  out: function(event) {//activeကို ဖယ်ရှား
    $(event.target).removeClass("dropover-active");
  },
  update: function() {//finished drag and drop, start new storage for task
    var tempArr = [];

    // loop over current set of children in sortable list
    $(this)
      .children()
      .each(function() {
        // save values in temp array
        tempArr.push({
          text: $(this)
            .find("p")
            .text()
            .trim(),
          date: $(this)
            .find("span")
            .text()
            .trim()
        });
      });

    // trim down list's ID to match object property(list-toDo စသည်)
    var arrName = $(this)
      .attr("id")
      .replace("list-", "");//တစ်ဖက်ကို ရောက် တစ်ဖက်က ပျောက်

    // update array on tasks object and save
    tasks[arrName] = tempArr;
    saveTasks();
  }
});

// trash icon can be dropped onto
$("#trash").droppable({
  accept: ".card .list-group-item",
  tolerance: "touch",
  drop: function(event, ui) {
    // remove dragged element from the dom
    ui.draggable.remove();
    $(".bottom-trash").removeClass("bottom-trash-active");
  },
  over: function(event, ui) {
    console.log(ui);
    $(".bottom-trash").addClass("bottom-trash-active");
  },
  out: function(event, ui) {
    $(".bottom-trash").removeClass("bottom-trash-active");
  }
});

// convert text field into a jquery date picker
$("#modalDueDate").datepicker({
  // force user to select a future date
  minDate: 1//တစ်ရက်သာ ရွေးခွင့်ရှိ 
});

// modal was triggered
$("#task-form-modal").on("show.bs.modal", function() {
  // clear values
  $("#modalTaskDescription, #modalDueDate").val("");//ဘာမှမနှိပ် မထည့်သေးခင် စာမရိုက်သေးခင်
});

// modal is fully visible
$("#task-form-modal").on("shown.bs.modal", function() {
  // highlight textarea
  $("#modalTaskDescription").trigger("focus");//စာရိုက်ဖို့ရန် ကာဆာချသည်ချိန် အဆင်သင့်ဖြစ်ချိန်
});

// save button in modal was clicked
$("#task-form-modal .btn-save").click(function() {
  // get form values
  var taskText = $("#modalTaskDescription").val();
  var taskDate = $("#modalDueDate").val();

  if (taskText && taskDate) {
    createTask(taskText, taskDate, "toDo");

    // close modal
    $("#task-form-modal").modal("hide");

    // save in tasks array
    tasks.toDo.push({
      text: taskText,
      date: taskDate
    });

    saveTasks();
  }
});

// task text was clicked
$(".list-group").on("click", "p", function() {
  // get current text of p element
  var text = $(this)
    .text()
    .trim();

  // replace p element with a new textarea
  var textInput = $("<textarea>").addClass("form-control").val(text);
  $(this).replaceWith(textInput);

  // auto focus new element
  textInput.trigger("focus");
});

// editable field was un-focused
$(".list-group").on("blur", "textarea", function() {
  // get current value of textarea
  var text = $(this).val();

  // get status type and position in the list
  var status = $(this)
    .closest(".list-group")
    .attr("id")
    .replace("list-", "");
  var index = $(this)
    .closest(".list-group-item")
    .index();

  // update task in array and re-save to localstorage
  tasks[status][index].text = text;
  saveTasks();

  // recreate p element
  var taskP = $("<p>")
    .addClass("m-1")
    .text(text);

  // replace textarea with new content
  $(this).replaceWith(taskP);
});

// due date was clicked
$(".list-group").on("click", "span", function() {
  // get current text
  var date = $(this)
    .text()
    .trim();

  // create new input element
  var dateInput = $("<input>")
    .attr("type", "text")
    .addClass("form-control")
    .val(date);
  $(this).replaceWith(dateInput);

  // enable jquery ui date picker
  dateInput.datepicker({
    minDate: 1,
    onClose: function() {
      // when calendar is closed, force a "change" event
      $(this).trigger("change");
    }
  });

  // automatically bring up the calendar
  dateInput.trigger("focus");
});

// value of due date was changed
$(".list-group").on("change", "input[type='text']", function() {
  var date = $(this).val();

  // get status type and position in the list
  var status = $(this)
    .closest(".list-group")
    .attr("id")
    .replace("list-", "");
  var index = $(this)
    .closest(".list-group-item")
    .index();

  // update task in array and re-save to localstorage
  tasks[status][index].date = date;
  saveTasks();

  // recreate span and insert in place of input element
  var taskSpan = $("<span>")
    .addClass("badge badge-primary badge-pill")
    .text(date);
    $(this).replaceWith(taskSpan);
    auditTask($(taskSpan).closest(".list-group-item"));
});

// remove all tasks ပြန်သုံးမရအေင် ဖျက်ပစ်
$("#remove-tasks").on("click", function() {
  for (var key in tasks) {//key= Obရဲ့ Property တစ်ခုချင်းစီ ယူ
    tasks[key].length = 0;
    $("#list-" + key).empty();//ရှာဖွေလို့ ရလာတာကို ဖျက်ပစ်
  }
  console.log(tasks);
  saveTasks();
});

// load tasks for the first time
loadTasks();

// audit task due dates every 30 minutes
setInterval(function() {//အချိန်စီမံ လုပ်ဆောင်ရန်
  $(".card .list-group-item").each(function() {//elementတွေကို တစ်ခုချင်းစီ loop လုပ်
    auditTask($(this));// ရလာတဲ့ loop စီတိုင်းကို ပို့တယ်
  });
}, 1800000);
//၁၈ မိနစ် ကြာတိုင်း elementများကို auditTaskနဲ့ စစ်ဆေးဖို့ လုပ်ဆောင်
