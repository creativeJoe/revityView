<script type="text/javascript">/*eslint-disable*/</script>

<template>
  <div class="dcontainer">

<!-- dashboard begins here -->

<div class = "theDashboardSpot" >
  <!-- loading component -->
<loader v-if = "loading" v-on:loadingv = "shouldLoaderClose($event)"></loader>
<!-- loading component -->




<!-- absolute position elements wrt html page -->
<!-- search participants here -->

    <div class = "d-nav-btn ss darken display-none" style = "box-shadow: 1px 2px 2px #191d6e;cursor: pointer;z-index: 10;position: absolute; top: 90px; left: 10px; background-color: #4348a1">
      <span class="glyphicon glyphicon-align-justify" style = "cursor: pointer;color: white;padding: 14px; font-size: 28px"></span>
    </div>

<!-- <div class = "search-panel" style = "height: 200px;position: fixed;right: 3px;bottom: 3px;background-color:yellow;z-index:4">
<p> hello world</p>

<span class = "glyphicon glyphicon-remove j-search-remove remove-dark" style = "position: relative;font-size: 30px;cursor: pointer;"></span>

</div> -->

<div class = "wrapper" style ="width:100%;position: absolute;z-index: 11"></div>




<!--add team dialog box-->
<div class = "add-team-box display-none" style = "margin-top: 10%;position: absolute; z-index: 12;background-color: white; border: 1px solid grey;height: auto;">
<center>
  <!-- remove menu button -->

    <span class="glyphicon glyphicon-remove remove-team-box remove-dark" style = "padding-top: 20px;cursor: pointer;color: #4348a1;font-size: 25px;padding-right: 30px;float: right"></span>
<br><br><br><br>
<font style = "font-weight: 700; font-size: 17px; margin-top: 50px">Create new team</font></center><br>
<div style = "text-align: left">
<p class = "p" style = "font-family: montserrat;margin-left: 25%; font-weight: 600; padding-bottom: 4px;width: 70%;max-width: 100%">View the members you are adding<br>

</p>

  <div class = "team-members" style = "background-color: #eee; height: 150px;">
<ul id = "team-lists">
<li class = "team-list" v-for = "participant in participants" v-if = "added">
  {{ participant.email }}
</li>
</ul>
  </div>
</div>
<div class="form-group">
  <label class="control-label col-sm-12 pname-label j-align" style = "width: 80%;position: relative" for="tname">Team name:</label><br>
  <div class="col-sm-12">
    <center>
      <input  v-model = "teamName" type="text" style = "height: 50px; width: 60%" class="form-control j-aligner" id="tname" placeholder="Boku buy"></center>
    <div class = "col-sm-2"></div>
  </div>
</div>
<div class="form-group" style = "margin-top: 3px">
  <label class="control-label col-sm-12 pname-label j-align" style = "width: 80%;position: relative" for="tname">
<font style = "font-size: 12px">Invite participants via email</font>
<button style = "background-color: #4348a1;color: white; border: none;padding: 6px" class = "ss" @click = "placeMember()">Add <span class = "glyphicon glyphicon-plus" ></span></button>
  </label><br>
  <div class="col-sm-12">
    <center><input v-model = "participantEmail" type="text" style = "height: 50px; width: 60%" class="form-control j-aligner" id="participant-email" placeholder="gbemiabijo@yahoo.com"></center>
    <div class = "col-sm-2"></div>
  </div>
</div>
<div class="form-group" style = "margin-top: 20px">
  <label class="control-label col-sm-12 pname-label j-align" style = "width: 80%;position: relative" for="tname">
<font style = "font-size: 12px">Role</font>
  </label><br>
  <div class="col-sm-12">
    <center><input v-model = "participantRole" type="text" style = "height: 50px; width: 60%" class="form-control j-aligner" id="tname2" placeholder="designer"></center>
    <div class = "col-sm-2"></div>
  </div>
</div>
<center>
<div class="form-group">
  <div class="col-sm-12">
    <button @click = "createNewTeam()" style="margin-bottom: 30px;background-color: #4348a1;margin-top: 17px;padding-bottom: 10px;padding-top: 10px;padding-left: 30px; padding-right: 30px;box-shadow: 2px 2px 2px grey;border-radius: none;" class="btn ss"><font style = "font-size: 11px; color: white" >
      CREATE TEAM</font></button>
      <br>
      <p>{{ createTeamRe }}</p>
  </div>
</div>
</center>
</div><!--end of add -team-->



<!-- add participants -->
<div class = "add-part display-none" style = "border: 1px solid #666666;position: absolute;z-index: 10;right: 10px;top: 35px;background-color: white; height: 600px; width: 300px">
  <span class = "glyphicon glyphicon-remove remove-addpar" style = "cursor: pointer;padding: 20px"></span>
  <center>
<input  placeholder = " Search participants" style = "margin-top: -5px;height: 50px; width: 90%;border: none;border-bottom: 2px solid #eee;"><br>
<font style = "position: relative;top: 11px;cursor:pointer" class = "darken add-extra-part">Add Participants&nbsp;&nbsp;<span class = "glyphicon glyphicon-plus-sign"></span></font>
</center>
<!-- <center>
<p style = "width: 250px"></p>
</center> -->





<!-- participants space -->
<div style = "margin-top: 30px;height : 430px; overflow-y: scroll; overflow-x: hidden">


<!-- the loop for participants -->
<div v-for = "x in membersList" class = "row" style = "background-color: ;padding: 15px">
<div class = "col-sm-4">
<i class="fas fa-user-circle profile-pic" style = "font-size: 44px;max-width: 100%;margin: auto; position: relative; left: 8px;" >
    </i>
<!-- <img src = "../assets/img/gg.png" class = "img-circle" style = ""> -->
</div>
<div class = "col-sm-8">
<!-- details -->
<p>
<font class = "name" style = "font-weight: 600;">{{ x.name }}</font><br>
<font class = "email" style = "font-size: 12px">{{ x.email }}</font><br>
<font class = "role" style = ""></font>
<div class = "remove-particpant display-none" @click = "removePar(x.index)" style = "cursor: pointer;height: 40px; background-color: red;" :key = "x.index"><span class = "glyphicon glyphicon-remove"></span>Remove this Participant</div>
</p>

</div>

</div>
<!-- end of the loop for participants -->



</div>
<!-- participants space end  -->
</div>
<!-- end of participants -->




<!--add new project box-->
<div class = "add-pbox display-none" style = "padding: 20px;margin-top: 10%;position: absolute; z-index: 11;background-color: white; border: 1px solid black">
  <div class = "p-remove remove-dark" style = "color: #4348a1;font-size: 25px;">
    <span class="glyphicon glyphicon-remove remove-dark" style = "cursor: pointer"></span></div>
<center>
<h3>New project</h3></center><br>

<div class="form-group">
  <label class="control-label col-sm-12 pname-label" style = "width: 80%;position: relative" for="pname">Project name:</label><br>
  <div class="col-sm-12">
    <center><input type="text" v-model = "pname" style = "height: 50px; width: 60%" class="form-control" id="pname" placeholder="Boku buy"></center>
    <div class = "col-sm-2"></div>

  </div>
</div><br><br>
<center>
<div class="form-group" style = "padding-bottom: 100px">
  <div class="col-sm-12">
    <button @click = "createProj"  style="margin-top: 50px;padding-bottom: 10px;padding-top: 10px;box-shadow: 2px 3px 4px grey;border-radius: none;background-color: #4348a1; color: #fff" class="btn ss" ><font style = "font-size: 11px">
      CREATE PROJECT</font></button>
  </div>
</div>
</center>
</div><!--end of new project-->




<!-- beginning of add extra participant -->
<div style = "position: absolute;top: 60px;z-index:13;width: 80%;margin-left: 10%;background-color: white;height: auto;border: 1px solid black;text-align: center" class = "add-extra-part-box display-none">
<span class="glyphicon glyphicon-remove remove-dark r-add-extra-part-box" style = "cursor: pointer; font-size: 15px;padding: 9px"></span><br>
<font style = "font-family: montserrat; font-size: 17px;font-weight: 600">Add An Extra Participant To This Team</font>
<br>
<div class = "row" style = "padding-top: 20px">
  <div class = "col-sm-1 col-1"></div>
<div class="col-sm-10 col-10">
<input type="text" v-model = "xparemail" style = "height: 50px;" class="form-control"  placeholder="Enter participant's email" v-on:keyup.13="addExtraPart()"><br>
<input type="text" v-model = "xparrole" style = "height: 50px" class="form-control"  placeholder="Enter participant's role" v-on:keyup.13="addExtraPart()"><br><br>

        <button @click = "addExtraPart()" style="margin-bottom: 30px;background-color: #4348a1;margin-top: 17px;padding-bottom: 10px;padding-top: 10px;padding-left: 30px; padding-right: 30px;box-shadow: 2px 2px 2px grey;border-radius: none;" class="btn ss"><font style = "font-size: 11px; color: white" >
      Add Participant</font></button>
      <br><br>
      <p>{{ parre }}</p>
</div>
</div>

</div>
<!-- end of adding extra particpants -->








<!-- are u sure box -->


<div style = "position: absolute;top: 60px;z-index:13;width: 80%;margin-left: 10%;background-color: white;height: auto;border: 1px solid black;text-align: center" class = "are-you-sure-box display-none">
<span class="glyphicon glyphicon-remove remove-dark r-are-you-sure-box" style = "cursor: pointer; font-size: 15px;padding: 9px"></span><br>

<div class = "row" style = "padding-top: 20px">
  <div class = "col-sm-1"></div>
<div class="col-sm-10">
        <font style = "font-size: 17px">Are you sure?</font><br><br>
<div class = "row">
<div class = "col-sm-6">
<button @click = "addExtraPart()" style="margin-top: 10px;background-color: #4348a1;padding-bottom: 10px;padding-top: 10px;padding-left: 30px; padding-right: 30px;box-shadow: 2px 2px 2px grey;border-radius: none;" class="btn ss"><font style = "font-size: 11px; color: white" >
      Yes</font></button>
</div>
<div class = "col-sm-6">
<button @click = "addExtraPart()" style="margin-top: 10px;background-color: #4348a1;padding-bottom: 10px;padding-top: 10px;padding-left: 30px; padding-right: 30px;box-shadow: 2px 2px 2px grey;border-radius: none;" class="btn ss"><font style = "font-size: 11px; color: white" >
      No</font></button>

</div>

</div>
        
      <br><br>
</div>
</div>

</div>







<!-- are u sure box -->



<!-- the navbar side sub -->
<div class = "d-nav-div display-none" style = "position: absolute; top: 70px; width : 80%;border: 1px solid #b1b2b5; background-color: white; height: auto;padding-bottom: 30px;z-index:112">


  <div class = "the-list" style  = "margin-left: 14px">
    <br><br>
<center>

  <!-- remove menu button -->
  <div class = "d-nav-remove remove-dark" style = "color: #4348a1;font-size: 25px;">
    <span class="glyphicon glyphicon-remove remove-dark" style = "cursor: pointer"></span></div>


</center>
    <br><br>
    <center>
  <div style = "font-size: 18px; font-weight: 600" class = "noc">The Name Of Your Company</div><br>
  <div class = "d-btn1 d-btn d-btn-active d d-btn-r d-btn-s"style = "padding: 15px;font-size: 16px;margin-top: 20px;cursor: pointer;">Dashboard</div></center>
  <br><br>
  <center><div style = "font-size: 16px;font-weight: 600;position: relative; right: 14px; margin-top: 20px" >Teams</div></center>

  <div class = "darken d-btn2 d-btn" style = "padding: 15px;font-size: 16px;margin-top: 20px; cursor: pointer;" id = "add-team">
    
    <center>{{ createText }}</center>


  </div>


<div class = "d-btn4 d-btn existing-team" style = "padding: 15px;font-size: 16px;margin-top: 20px; cursor: pointer;" id = "add-team">

 <center>Team UI</center>


  </div>
  
<!-- <font class = "team-text">Teams</font> -->
<div class = "teamul">

    <li @click = "detTeamActive(team.index)" class = "team" v-for = "team in teams" :key = "team.index">{{ team.team_name }}</li>

</div>



  <center><div style = "font-size: 16px;position: relative; right: 14px; margin-top: 70px;font-weight: 600;">Chat</div></center>
  <div class = "d-btn3 d-btn existing-chat" style = "padding: 15px;font-size: 16px;margin-top: 20px; cursor: pointer;" ><center>
    Existing Chat &nbsp;&nbsp;<span class = "glyphicon glyphicon-user" ></span></center></div>

<!-- start of chatlist -->
    <div class = "chat-list-div" style = "height: 200px;background-color: ;overflow-y: scroll; text-align: center">
<ul class ="chat-list">
  <li><font style = "font-size: 11px">Jerry Ayodele</font>&nbsp;<img style = "width: 9px;diplay: inline" src = "../assets/img/greendot.png"></li>
 <li><font style = "font-size: 11px">Peter Pan</font>&nbsp;<img style = "width: 9px;diplay: inline" src = "../assets/img/emptydot.png"></li>
  <li><font style = "font-size: 11px">Jerry</font>&nbsp;<img style = "width: 9px;diplay: inline" src = "../assets/img/emptydot.png"></li>
  <li><font style = "font-size: 11px">Peter Pan</font>&nbsp;<img style = "width: 9px;diplay: inline" src = "../assets/img/emptydot.png">
  </li>
  <li><font style = "font-size: 11px">Jerry</font>&nbsp;<img style = "width: 9px;diplay: inline" src = "../assets/img/emptydot.png"></li> 
</ul>
</div>

<!-- end of chat list -->

  <center><a href= "/"><div class = "ss" style = "font-size: 16px;margin-top: 150px; background-color: #4848a1; padding-left: 50px; padding-right: 50px; padding: 10px;color: #fff;position:relative;left: -10px" id = "log-out">
    LOG OUT</div></a></center>
  <br>

  </div><!--the list end-->


</div>

<div class = "overlay-back">

</div>


<div class = "the-html overlay"><!--beginning of the html div-->

<!-- end of absolute positions here wrt html page -->

<!-- responsive elements here -->

<div class = "wrap" style = "">

<div class = "j-navbar" style = "height: 100px; background-color: #f0f3f3;margin-top: -40px">
  <br>
<a href = "/" class = "j-logo" style = "position: absolute; top: 34px; left: 0px">
  <img class="path2" src="../assets/img/logo.png" style = "width: 35px">
  <font class="revity" style ="">
    Revity 
  </font>
</a>
<div style = "float: right">
  <ul class='nav-btns' style = "position: absolute">
<li>
<a href='/'><button class = "sss">Home</button></a>
</li>

<li><a href = '/about'>
<button class = "sss">About Revity</button>
</a>
</li>
  </ul>
<a href = "#" id = "show-profile" style = "text-align: center">
    <i class="fas fa-user-circle profile-pic" style = "z-index: 3;margin-top: 10px; font-size: 44px;margin-right: 24px;padding: bottom: 4px;max-width: 100%" >
    </i><br>
    <font style = "z-index: 3;margin-top: 10px; font-size: 10px;margin-right: 24px;padding: bottom: 4px;max-width: 100%">Show Profile</font>

  <!-- <img style = "z-index: 3;  width: 60px;margin-right: 13px;padding: bottom: 4px;max-width: 100%" class="profile-pic" src="../assets/img/pp.png"> -->
</a>
<span class = "glyphicon glyphicon-search j-search" style = "display: none;font-size: 30px;cursor: pointer;"></span>

</div>
</div><!--end of the j-navbar-->






<div class = "wrapp"><!--beginning of the overlaydark-->
<div class = " row" style = 'margin-top: 30px;'>
<div class = "leftside" style = "height: auto;">
<div class = "the-list" style  = "margin-left: 14px">
  <br><br>
<div style = "font-size: 18px; font-weight: 600" class = "noc">The Name Of Your Company</div><br>
<div class = "d-btn1 d-btn d-btn-active d"style = "padding: 15px;font-size: 16px;margin-top: 20px;cursor: pointer;">Dashboard</div>
<br><br>
<center><div style = "font-size: 16px;font-weight: 600;position: relative; right: 14px; margin-top: 20px">Teams</div></center>

<div class = "d-btn2 d-btn new-team darken" style = "padding: 15px;font-size: 14px;margin-top: 20px; cursor: pointer;">


  <center>{{ createText }}</center>

</div>

<div class = "d-btn4 d-btn existing-team" style = "padding: 15px;font-size: 16px;margin-top: 20px; cursor: pointer;" id = "add-team">

 <center>Team UI</center>


  </div>

<!-- <font class = "team-text">Teams</font> -->
<div class = "teamul">
    <li @click = "detTeamActiveMain(team.index)" class = "teamm" v-for = "team in teams" :key = "team.index">{{ team.team_name }}</li>
</div>




<center><div style = "font-size: 16px;position: relative; right: 14px; margin-top: 70px;font-weight: 600;">Chat</div></center>
<div class = "d-btn3 d-btn existing-chat" style = "padding: 15px;font-size: 16px;margin-top: 20px; cursor: pointer;" ><center>Existing Chat&nbsp;<span style = "font-size: 10px" class = "glyphicon glyphicon-user"></span>
</center></div>
<div class = "chat-list-div" style = "height: 200px;background-color: ;overflow-y: scroll;text-align: center; margin-left: 20px">
<ul class ="chat-list">
  <li><font style = "font-size: 11px">Jerry Ayodele</font>&nbsp;<img style = "width: 9px;diplay: inline" src = "../assets/img/greendot.png"></li>
 <li><font style = "font-size: 11px">Peter Pan</font>&nbsp;<img style = "width: 9px;diplay: inline" src = "../assets/img/emptydot.png"></li>
  <li><font style = "font-size: 11px">Jerry</font>&nbsp;<img style = "width: 9px;diplay: inline" src = "../assets/img/emptydot.png"></li>
  <li><font style = "font-size: 11px">Peter Pan</font>&nbsp;<img style = "width: 9px;diplay: inline" src = "../assets/img/emptydot.png">
  </li>
  <li><font style = "font-size: 11px">Jerry</font>&nbsp;<img style = "width: 9px;diplay: inline" src = "../assets/img/emptydot.png"></li> 
</ul>
</div>
<a href = "/">
<center><div style = "font-size: 16px;margin-top: 100px; background-color: #4348a1; padding-left: 50px; padding-right: 50px; padding: 10px;color: #fff">LOG OUT</div>
</center>
</a>
<br>

</div><!--the list end-->
</div><!--the left navbar-->




<div class = "main-side col-sm-12 col-md-12 col-lg-10 col-xl-10"><!--beginning of the main side-->
  <div class = "dashboard" style = "z-index: -1;">
  <div class = "sections" style = "height: 60px; background-color: #4348a1;padding: 20px;max-width: 100%;">
    <!-- some buttons -->
    <!-- menu botton -->
    <center> <font style = "color: white; font-weight: 600">Dashboard</font><font style = "color: white; float: right; margin-right: 30px; cursor: pointer">    </font> </center>  </div>
  <br>
  <div class = "row">
  <div class="col-md-4" style = "padding: 50px">
    <div style = "background-color: #e8e8e8">
      <canvas id="myChart" width="400" height="400" style = "background-color: #eee;"></canvas>
    </div>
  </div>

  <div class="col-md-4" style = "padding: 50px">
<canvas id="myChart1" width="400" height="400"></canvas>
  </div>
  <div class="col-md-4" style = "padding: 50px">
    <div style = "background-color: #e8e8e8;">
<canvas id="myChart2" width="400" height="400"></canvas>
  </div>
  </div>
  <br><br><br><br>
</div>


</div><!--end of dashboard-->










<!-- task list begins here -->
<div class = "task-list"> This is the task list</div>


<!-- task list ends here -->










<!-- project list begins here -->
<div class = "project-list">

  <div class = "addTB" style = "z-index: 300; position: absolute;top: 50px; left: 10%; width: 80%; height: auto; background-color: #eee;padding: 26px">
<span @click = "closeTB()" style = "font-size: 20px; cursor: pointer;color: rgb(67, 72, 161);" class="glyphicon glyphicon-remove"></span><br>
<center><h3 style = "color: rgb(67, 72, 161);font-weight: 600">Add A New Task</h3></center>
<br>
<p style = "width: 80%;margin-left: 10%; font-size: 13px; font-weight: 400">Enter task name</p>
<input v-model = "taskNam" class = "form-group" style = "height: 50px; width: 80%;margin-left: 10%" placeholder = "Enter task name">
<br>
<p class = "rr task-name-reply" style = "width: 80%;margin-left: 10%; font-size: 13px; font-weight: 400">{{ task_name_reply }}</p>
<br>
<p style = "width: 80%;margin-left: 10%; font-size: 13px; font-weight: 400">Enter milestone</p>

<input v-model = "mileston" class = "form-group" style = "height: 50px; width: 80%;margin-left: 10%" placeholder = "Enter milestone e.g">
<br>
<p class = "rr milestone-reply" style = "width: 80%;margin-left: 10%; font-size: 13px; font-weight: 400">{{ milestone_reply }}</p>
<br>
<p style = "width: 80%;margin-left: 10%; font-size: 13px; font-weight: 400">Enter member's email</p>

<input v-model = "asEmail" class = "form-group" style = "height: 50px; width: 80%;margin-left: 10%" placeholder = "Enter assignee's email">
<br>
<p class = "rr assignee-reply" style = "width: 80%;margin-left: 10%; font-size: 13px; font-weight: 400">{{ assignee_reply }} </p>
<br>
<p style = "width: 80%;margin-left: 10%; font-size: 13px; font-weight: 400">Enter the date span</p>

<div class = "row" style ="margin-left: 10%; width: 80%">
  <div style = "font-size: 9px;" class = "col-sm-1 col-md-1">
    From
</div>
  <div class = "col-sm-5 col-md-5">
    <input type = "date" min = "2018-01-01" max = "2800-01-01" v-model = "start_date" class = "form-group" style = "border: none;height: auto;padding: 3px; font-size: 16px;width: 80%;" >
  </div>


 <div style = "font-size: 9px" class = "col-sm-1 col-md-1">
    to:
</div>
  <div class = "col-sm-5 col-md-5">
    <input type = "date" min = "2018-01-01" max = "2800-01-01" v-model = "end_date" class = "form-group" style = "border: none;height: auto;padding: 3px; font-size: 16px;width: 80%;" >
  </div>

</div>
<br>
<p class = "rr date-reply" style = "width: 80%;margin-left: 10%; font-size: 13px; font-weight: 400">{{ date_reply }}</p>
<br>

<center>
<button  @click = "addTask()" class = "pbtn" style = "background-color: transparent; border: 2px solid grey;padding: 10px">
         <font style = "padding-left: 30px;padding-right: 30px;"><span class="glyphicon glyphicon-plus-sign"></span>&nbsp;&nbsp;&nbsp;&nbsp;Add Task</font>

    </button></center>

  </div>
  <!-- end iof the add task box -->
 <div class = "sections" style = "height: 60px; background-color: #4348a1;padding: 20px;max-width: 100%;">
   
    <center> <font style = "color: white; font-weight: 600">{{currentTeam}} Projects</font><font class = "add-project darken" style = "color: white; float: right; margin-right: 30px; cursor: pointer">Projects
<span class="glyphicon glyphicon-plus-sign"></span>
    </font> </center>  </div>
  <br>

<div @click = "goBack()" class = "ss" alt= "go back" style = "box-shadow: 1px 1px 4px grey;cursor: pointer;padding: 7px;height: auto; width: 80px;background-color: rgb(67, 72, 161);text-align: center">
 <span style = "font-size: 23px; color: white;" class="glyphicon glyphicon-arrow-left"></span>
</div>

<div v-if = "projectEmpty">
<center style = "font-size: 20px">Projects yet to be added</center>
</div>

  <div v-if = "!projectEmpty" v-for = "x in projList" style = "max-width: 100%; width: 80%; margin-left: 10%;background-color: rgb(240, 243, 243); margin-top: 15px; padding: 30px;padding-right: 0px; height: auto;">
    <!-- {{ x.parent_company }} -->
   <div class = "row">
    <div class = "col-sm-6">

    <h3>Project Name: &nbsp;&nbsp;&nbsp;{{ x.project_name }}</h3> 

    <button class = "pbtn" @click = "taskList(x.project_name, x.index)" style = "background-color: transparent; border: 2px solid grey;padding: 10px">View Tasks</button>
    <br>
    <div class = "taskdiv" :key = "x.index" >
      <br>
    <h2>Tasks</h2>
    <div class = "taskbtn">

        <button @click = 'addTaskBox()' class = "ss darken" style = "padding: 10px;font-size: 10px; border: none; background-color: rgb(67, 72, 161);color: white;">Add a task
        
        </button>
 

      <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
       
    

    </div><br><br>
    <div v-if = "ttaskEmpty">
      No tasks in this project
    </div>
    <div v-if = "!ttaskEmpty" style = "overflow-y: scroll;height: 300px; overflow-x: hidden;width: 90%;">
    <div v-if = "!ttaskEmpty" v-for = "y in tasList" > 

      <div class = "row" style = "background-color: white;margin-bottom: 12px;padding: 6px;">
<div class = "col-1 col-sm-1 col-xs-1 col-md-1 col-lg-1" style = "font-size: 13px; font-weight: 600">
{{ y.id }}
</div>
<div class = "col-11 col-sm-11 col-md-11 col-xs-11 col-lg-11">
<font style = "font-size: 13px; font-weight: 600">Task Name &nbsp;&nbsp;&nbsp;:</font>  &nbsp;&nbsp;{{ y.name }}<br>
      <font style = "font-size: 13px; font-weight: 600">Assignee&nbsp;&nbsp;&nbsp;:</font>  &nbsp;&nbsp;{{ y.assignee }}<br>
      <font style = "font-size: 13px; font-weight: 600">Start Date&nbsp;&nbsp;&nbsp;:</font>  &nbsp;&nbsp;{{ y.start_date }}<br>
      <font style = "font-size: 13px; font-weight: 600">End Date&nbsp;&nbsp;&nbsp;:</font> &nbsp;&nbsp; {{ y.end_date }}<br>
      <font style = "font-size: 13px; font-weight: 600">Completed&nbsp;&nbsp;&nbsp;:</font> &nbsp;&nbsp; {{ y.completed }}<br><br>
       <button @click = "deleteTask(y.name)" class = "ss darken" style = "padding: 9px;font-size: 10px; border: none; background-color: rgb(67, 72, 161);color: white;">
          Delete this task
        
        </button><br><br>
</div>
      



      </div> 


    </div>
  </div>
    <br>
    </div>

    </div>

<div class = "col-sm-3"></div>
<!-- an offset -->

    <div class = "jctrl col-sm-3" >

      <button @click = "deleteProj(x.project_name)" class = "pbtn ctrlb delb" style = "background-color: transparent; border: 2px solid grey;padding: 10px; border-right: 0px;border-top-left-radius: 10px;border-bottom-left-radius: 10px">
         <span class="glyphicon glyphicon-remove"></span> Delete Project
      </button>


    <button  @click = "deleteProj(x.project_name)" class = "pbtn del" style = "background-color: transparent; border: 2px solid grey;padding: 10px">
         <span class="glyphicon glyphicon-remove"></span> Delete Project

    </button>

    </div>

   </div>
   <!-- end of the reo -->
   

  </div>

</div>
<!-- project list ends here -->
















<!-- new team thread beins here -->
<div class = "new-team-thread">

<div class = "add-project darken" style = "z-index: 400;cursor: pointer;position: fixed; width: 80px;bottom: 12px; right: 6px;height: auto;padding: 4px; background-color: #e8e8e8">
<center><span style = "padding-top: 20px;font-size: 14px; " class = "add-project darken glyphicon glyphicon-plus-sign"></span></center><center><font style = "font-size: 9px; font-family: montserrat">Add project</font></center>
</div>









<div class = "new-existingt"><!--beginning of existing team-->
  <div class = "" style = "height: auto; background-color: #e8e8e8;padding:;"> 
<div style = "background-color: #4348a1;height:auto;padding: 10px;"><!--team nav-->
<!-- title -->

  <!-- dropdown  -->
    <center style = "padding-top: 12px;padding-bottom: 12px;color:white">
<font style = "font-weight: 600;" class = 'team-title'>{{ currentTeam }}</font>
&nbsp;&nbsp;&nbsp;
     <button style = "border: none; color: #fff;background-color: transparent" class = "team-dropdown">
<span style ="position: relative; top: 9px" class = "arrow-down glyphicon glyphicon-chevron-down" ></span></glyphicon>
    </button>
    &nbsp;&nbsp;&nbsp;
<font class = "no-of-p team-title">{{ noOfPart }} participants</font>
</center>


<font @click = "listMembers()" class = "add-par" style = "cursor: pointer;float: right;margin-right: 30px;color: white;position: relative; top: -30px"><span class = "gps glyphicon glyphicon-plus-sign"></span><font class = "add-par-font" style = "font-size: 11px">&nbsp;&nbsp;&nbsp;Add Participants</font></font>
    </div>
<center>
<div class = "tdp" style = "z-index: 9;box-shadow: 2px 3px 3px grey;width: 230px; height: auto; background-color: white;position: absolute">
<ul>
  <li class = "teamfn" style = "background-color: white;"><h4><b>{{currentTeam}}</b></h4></li>
<li class = "teamfn" @click = "projectList()">Projects</li>

<li class = "teamfn" @click = "deleteTeam()">Delete Team</li>

<li class = "teamfn" @clcik = "leaveTeam()">Leave Team</li>
</ul>
</div>
    </center> 
<!-- drop down ends -->

<!-- team thread starts here -->
<div class = "team-thread" style = "padding-bottom: 40px;background-color: white;margin-top: -9px;">
<!--template-->


        <center><p class = "new-date" style = "padding-top: 30px; width: 87%"><span>Today</span></p></center>

<div style = "height: auto">
  <!--first chat-->
  <div class = "row" style = "padding-top: 20px;width: 70%">

      <div class = "col-sm-3 col-md-3 col-lg-3 col-xs-3">
<img src = "../assets/img/gg.png" class = "thread-pimg image-circle">
      </div>
      <div class = "col-sm-9 col-md-9 col-xs-9 col-lg-9 margin-control" style = "">
<font class = "name" style = "font-weight: 700; font-size: 13px;">Gbemisola Abijo&nbsp;&nbsp;&nbsp;&nbsp;
<font class = "ctime">10:23 PM</font>
</font>
<p class = "the-chat" style = "width : 85%">
Hello Jerry, I've been trying to call you all day, hope no problem.Changes will be made to the designs tonight
<div class = "uploaded-img"></div>
</p>
<ul class = "chatted-btn">
<li>
<span class="glyphicon glyphicon-repeat"></span> 
</li>
<li>
<span class="glyphicon glyphicon-retweet"></span>
</li>

</ul>
      </div>

  </div><!--first chat ends here-->


<!-- second chat beginshere -->
  <div class = "row" style = "padding-top: 20px;width:70%">

      <div class = "col-sm-3 col-md-3 col-lg-3 col-xs-3">
<img src = "../assets/img/jack.png" class = "thread-pimg image-circle">
      </div>
      <div class = "col-sm-9 col-md-9 col-xs-9 col-lg-9 margin-control" style = "">
<font class = "name" style = "font-weight: 700; font-size: 13px;">Jack Robbison&nbsp;&nbsp;&nbsp;&nbsp;
<font class = "ctime">10:50 PM</font>
</font>
<p class = "the-chat" style = "width : 85%">
 Can I use this as the background image guys?
 <div class = "uploaded-img">
<img style = "max-width: 100%" src ="../assets/img/uploaded.png">
 </div>
</p>
<ul class = "chatted-btn">
<li>
<span class="glyphicon glyphicon-repeat"></span> 
</li>
<li>
<span class="glyphicon glyphicon-retweet"></span>
</li>

</ul>
      </div>

  </div>
  <!-- second cchat ends here -->


  <!-- third chat -->
<div class = "row" style = "padding-top: 20px;width: 70%">

      <div class = "col-sm-3 col-md-3 col-lg-3 col-xs-3">
<img src = "../assets/img/gg.png" class = "thread-pimg image-circle">
      </div>
      <div class = "col-sm-9 col-md-9 col-xs-9 col-lg-9 margin-control" style = "">
<font class = "name" style = "font-weight: 700; font-size: 13px;">Gbemisola Abijo&nbsp;&nbsp;&nbsp;&nbsp;
<font class = "ctime">10:23 PM</font>
<p class = "creplies" style = "font-weight: 200;color: #a8a9a9;font-size:11px">
Reply to Jack Robbison "Can I use this. . ."
  </p>
</font>
<p class = "the-chat" style = "width : 85%">
  
This is cool
<div class = "uploaded-img"></div>
</p>
<ul class = "chatted-btn">
<li>
<span class="glyphicon glyphicon-repeat"></span> 
</li>
<li>
<span class="glyphicon glyphicon-retweet"></span>
</li>

</ul>
      </div>

  </div>
  <!-- third chat end -->






<!--chat input form-->
<div class = "sections" style = "position: fixed;z-index: 2; bottom: 20px;">
<div class = "jj-row row" style = "" >
<div class =  "col-md-10 col-xs-10 col-lg-10 col-sm-10" style = "position: relative;left: 30px;height: 30px;">

  <!-- <center><input  type="text" placeholder = "user@domain.com" style = "height: 60px; min-width:auto" class="form-control" ></center> -->
</div>
<div class =  "col-md-2 col-xs-2 col-lg-2 col-sm-2" style = " ">
<!-- <span class="glyphicon glyphicon-paperclip" style = "position: relative; left: 20px;font-size: 26px; margin-top: 12px;" ></span> -->
</div>

</div>
</div>

</div>
<!--end of template-->
</div>

</div><!--team  here-->






</div><!--end of the existing team form div-->


















</div>
<!-- new team thread ends here -->







<div class = "myprofile"><!--beginning of myprofile-->
  
<div class = "sections" style = "height: 60px; background-color: #4348a1;padding: 20px">  <center><font style = "color: white"> Me </font></center>  </div>
  <br>
  <div class = "row">
<div class = "col-sm-5">
  <br>
  <center>
    <img style = "margin-top: 60px;" class="profile-pic rimg" src="../assets/img/my account img7681  1.png">
    <br><br>
<p><a href = "#" style = "font-size: 20px;">Change your profile pic</a></p>

</center>
</div>
<div class = "col-sm-7">
  <div class = "profile-form" style = "margin-top: 90px">
  <form class="form-horizontal" role="form">
    <div class="form-group">
      <label class="control-label" style = "margin-left: 14px" for="email">Name:</label><br><br>
      <div class="col-sm-10">
        <input type="text" style = "height: 70px" class="form-control" id="name" placeholder="Enter name">
      </div>
      <div class = "col-sm-2"></div>
    </div>
    <br>
    <div class="form-group">
      <label class="control-label" style = "margin-left: 14px" for="role">Role:</label><br><br>
      <div class="col-sm-10">
        <input type="text" style = "height: 70px" class="form-control" id="role" placeholder="Designer">
      </div>
      <div class = "col-sm-2"></div>
    </div>
    <br>
    <div class="form-group">
      <label class="control-label" style = "margin-left: 14px" for="pwd">Password:</label><br><br>
      <div class="col-sm-10">
        <input type="password" style = "height: 70px" class="form-control" id="pwd" placeholder="Enter password">
        <div class = "col-sm-2"></div>

      </div>
    </div><br>
    <div class="form-group">
      <label class="control-label" style = "margin-left: 14px" for="cpwd">Password:</label><br><br>
      <div class="col-sm-10">
        <input type="password" style = "height: 70px" class="form-control" id="cpwd" placeholder="Re-enter password">
        <div class = "col-sm-2"></div>

      </div>
    </div><br>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" style="color: white;background-color: #4348a1;padding: 20px;padding-left: 60px; padding-right: 60px;box-shadow: 2px 3px 4px #888cda" class="btn ss">Save Changes</button>
      </div>
    </div>
  </form>


</div>
</div><!--end of the myprofile form div-->
  </div>
</div><!--end of my profile-->








<div class = "existingt"><!--beginning of existing team-->
  <div class = "" style = "height: auto; background-color: #e8e8e8;padding:;"> 
<div style = "background-color: #4348a1;height:auto;padding: 10px;"><!--team nav-->
<!-- title -->

  <!-- dropdown  -->
    <center style = "padding-top: 12px;padding-bottom: 12px;color:white">
<font style = "font-weight: 600;" class = 'team-title'>Internship 2018</font>
&nbsp;&nbsp;&nbsp;
     <button style = "border: none; color: #fff;background-color: transparent" class = "team-dropdown">
<span style ="position: relative; top: 9px" class = "arrow-down glyphicon glyphicon-chevron-down" ></span></glyphicon>
    </button>
    &nbsp;&nbsp;&nbsp;
<font class = "no-of-p team-title">20 participants</font>
</center>


<font class = "add-par" style = "cursor: pointer;float: right;margin-right: 30px;color: white;position: relative; top: -30px"><span class = "gps glyphicon glyphicon-plus-sign"></span><font class = "add-par-font" style = "font-size: 11px">&nbsp;&nbsp;&nbsp;Add Participants</font></font>
    </div>
<center>
<div class = "tdp" style = "box-shadow: 2px 3px 3px grey;width: 230px; height: auto; background-color: white;position: absolute">
<ul>
<li><a>Team Projects</a></li>

<li><a>Team tasks</a></li>

<li ><a>Delete Team</a></li>

<li><a>Leave Team</a></li>


</ul>
</div>
    </center> 
<!-- drop down ends -->

<!-- team thread starts here -->
<div class = "team-thread" style = "padding-bottom: 40px;background-color: white;margin-top: -9px;">
<!--template-->


        <center><p class = "new-date" style = "padding-top: 30px; width: 87%"><span>Today</span></p></center>

<div style = "height: auto">
  <!--first chat-->
  <div class = "row" style = "padding-top: 20px;width: 70%">

      <div class = "col-sm-3 col-md-3 col-lg-3 col-xs-3">
<img src = "../assets/img/gg.png" class = "thread-pimg image-circle">
      </div>
      <div class = "col-sm-9 col-md-9 col-xs-9 col-lg-9 margin-control" style = "">
<font class = "name" style = "font-weight: 700; font-size: 13px;">Gbemisola Abijo&nbsp;&nbsp;&nbsp;&nbsp;
<font class = "ctime">10:23 PM</font>
</font>
<p class = "the-chat" style = "width : 85%">
Hello Jerry, I've been trying to call you all day, hope no problem.Changes will be made to the designs tonight
<div class = "uploaded-img"></div>
</p>
<ul class = "chatted-btn">
<li>
<span class="glyphicon glyphicon-repeat"></span> 
</li>
<li>
<span class="glyphicon glyphicon-retweet"></span>
</li>

</ul>
      </div>

  </div><!--first chat ends here-->


<!-- second chat beginshere -->
  <div class = "row" style = "padding-top: 20px;width:70%">

      <div class = "col-sm-3 col-md-3 col-lg-3 col-xs-3">
<img src = "../assets/img/jack.png" class = "thread-pimg image-circle">
      </div>
      <div class = "col-sm-9 col-md-9 col-xs-9 col-lg-9 margin-control" style = "">
<font class = "name" style = "font-weight: 700; font-size: 13px;">Jack Robbison&nbsp;&nbsp;&nbsp;&nbsp;
<font class = "ctime">10:50 PM</font>
</font>
<p class = "the-chat" style = "width : 85%">
 Can I use this as the background image guys?
 <div class = "uploaded-img">
<img style = "max-width: 100%" src ="../assets/img/uploaded.png">
 </div>
</p>
<ul class = "chatted-btn">
<li>
<span class="glyphicon glyphicon-repeat"></span> 
</li>
<li>
<span class="glyphicon glyphicon-retweet"></span>
</li>

</ul>
      </div>

  </div>
  <!-- second cchat ends here -->


  <!-- third chat -->
<div class = "row" style = "padding-top: 20px;width: 70%">

      <div class = "col-sm-3 col-md-3 col-lg-3 col-xs-3">
<img src = "../assets/img/gg.png" class = "thread-pimg image-circle">
      </div>
      <div class = "col-sm-9 col-md-9 col-xs-9 col-lg-9 margin-control" style = "">
<font class = "name" style = "font-weight: 700; font-size: 13px;">Gbemisola Abijo&nbsp;&nbsp;&nbsp;&nbsp;
<font class = "ctime">10:23 PM</font>
<p class = "creplies" style = "font-weight: 200;color: #a8a9a9;font-size:11px">
Reply to Jack Robbison "Can I use this. . ."
  </p>
</font>
<p class = "the-chat" style = "width : 85%">
  
This is cool
<div class = "uploaded-img"></div>
</p>
<ul class = "chatted-btn">
<li>
<span class="glyphicon glyphicon-repeat"></span> 
</li>
<li>
<span class="glyphicon glyphicon-retweet"></span>
</li>

</ul>
      </div>

  </div>
  <!-- third chat end -->






<!--chat input form-->
<div class = "sections" style = "position: fixed;z-index: 2; bottom: 20px;">
<div class = "jj-row row" style = "" >
<div class =  "col-md-10 col-xs-10 col-lg-10 col-sm-10" style = "position: relative;left: 30px;height: 30px;">

  <center><input  type="text" placeholder = "user@domain.com" style = "height: 60px; min-width:auto" class="form-control" id="chat-input2"></center>
</div>
<div class =  "col-md-2 col-xs-2 col-lg-2 col-sm-2" style = " ">
<span class="glyphicon glyphicon-paperclip" style = "position: relative; left: 20px;font-size: 26px; margin-top: 12px;" ></span>
</div>

</div>
</div>

</div>
<!--end of template-->
</div>

</div><!--team  here-->






</div><!--end of the existing team form div-->



















<div class = "existingc" style = "z-index: 11;position: absolute;border: 1px solid #eee"><!--beginning of existing chat-->
  <div class = "chat-space" style = "height: 600px; background-color: #f0f3f3;border: 1px solid transparent;padding: 20px;width: 350px"> 
    <span class="glyphicon glyphicon-remove remove-existingc remove-dark" style = "position: absolute;left:3px;padding:20px;cursor: pointer"></span>
<br><br>
   <center><input type = "input" style = "color: #7c7d7d;border: 1px solid #d9dcdc;padding-left: 50px;padding-right: 50px;padding-top: 10px;padding-bottom: 10px;background-color: #eee" placeholder = "Search Message"> 
    <span class="glyphicon glyphicon-search" style = "cursor: pointer"></span>
    <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search Message </input> -->

    <br>
  </center> <br><br>

    <div style = "height: 400px; background-color: transparent;overflow-y: scroll;overflow-x: hidden;">
    
   <div class = "user-chat" style = "background-color: #fff;padding: 10px; margin-top: 20px;">
    <div class = "row" >
<div class = "col-sm-3 col-md-3 col-xs-3 col-lg-3" ><div class = "cimg" style = "position: relative; left: 7px;top: 10px"><img src = "../assets/img/gg.png"></div></div>
<div class = "col-sm-9 col-md-9 col-xs-9 col-lg-9">
<font style = "font-weight: bold">You</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font class = "ctime" style = "color: #d9dcdc">
10:23<br>
</font>
<p style = "width: 95%">Hello Jerry, I've been trying to call you all day, hope no problem. Changes will be made to the designs tonight</p>
</div>

    </div>

   </div>



    <div class = "res-chat" style = "background-color: #4348a1;padding: 10px; margin-top: 20px;">
    <div class = "row" >
<div class = "col-sm-3 col-md-3 col-xs-3 col-lg-3" ><div class = "cimg" style = "position: relative; left: 7px;top: 10px"><img src = "../assets/img/cpp.png" ></div></div>
<div class = "col-sm-9 col-md-9 col-xs-9 col-lg-9">
<font style = "font-weight: bold; color: #fff">Jerry Ayodele</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font class = "ctime" style = "color: #fff">
10:30<br>
</font>
<p style = "width: 95%;color:#fff">Ok thank you!Been looking forword to it.Hope your week is going well and the stress from home isn't much</p>
</div>

    </div>

   </div>


   <div class = "user-chat" style = "background-color: #fff;padding: 10px; margin-top: 20px;">
    <div class = "row" >
<div class = "col-sm-3 col-md-3 col-xs-3 col-lg-3" ><div class = "cimg" style = "position: relative; left: 7px;top: 10px"><img src = "../assets/img/gg.png"></div></div>
<div class = "col-sm-9 col-md-9 col-xs-9 col-lg-9">
<font style = "font-weight: bold">You</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font class = "ctime" style = "color: #d9dcdc">
10:30<br>
</font>
<p style = "width: 95%">It's not bad at all.Thank you</p>
</div>

    </div>

   </div>



<div class = "user-chat" style = "background-color: #fff;padding: 10px; margin-top: 20px;">
    <div class = "row" >
<div class = "col-sm-3 col-md-3 col-xs-3 col-lg-3" ><div class = "cimg" style = "position: relative; left: 7px;top: 10px"><img src = "../assets/img/gg.png"></div></div>
<div class = "col-sm-9 col-md-9 col-xs-9 col-lg-9">
<font style = "font-weight: bold">You</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font class = "ctime" style = "color: #d9dcdc">
10:30<br>
</font>
<p style = "width: 95%">No reponse?</p>
</div>

    </div>

   </div>




    <div class = "res-chat" style = "background-color: #4348a1;padding: 10px; margin-top: 20px;">
    <div class = "row" >
<div class = "col-sm-3 col-md-3 col-xs-3 col-lg-3" ><div class = "cimg" style = "position: relative; left: 7px;top: 10px"><img src = "../assets/img/cpp.png" ></div></div>
<div class = "col-sm-9 col-md-9 col-xs-9 col-lg-9">
<font style = "font-weight: bold; color: #fff">Jerry Ayodele</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font class = "ctime" style = "color: #fff">
10:39<br>
</font>
<p style = "width: 95%;color:#fff">Sorry I got distracted.</p>
</div>

    </div>

   </div>



 </div>

<div class = "row" style = "width: 100%;position: absolute; bottom: 0px;padding: 10px">
  <center>
  <div class = "col-sm-10 col-md-10 col-xs-10 col-lg-10">
 <input placeholder = " &nbsp;..type here" type = "text" style = "height: 40px;width: 100%; position: relative; left: 0px;border: 1px solid #eee; "></div>
 <div class = "col-sm-2 col-md-2 col-lg-2 col-xs-2">
<img src = "../assets/img/paperclip.png" style = "padding-top: 10px">
</div>
</center>
</div>
</div>
</div>
</div><!--end of the existing chat form div-->





</div><!--end of the main side-->



</div>

</div><!--end of the overlay dark-->



</div><!--end of the wrap div-->

</div><!--end of html div-->





























</div>

<!-- <dashboard></dashboard> -->

</div><!--end of the row div-->
















   
  </div>
</template>

<script>
/* eslint-disable */

import vue from 'vue'
import axios from 'axios'

export default {
  data() {
    return {
      ttaskEmpty : true,
      parre: '',
      date_reply: '',
      assignee_reply: '',
      milestone_reply: '',
      task_name_reply: '',

      taskNam: null,
      mileston: null,
      asEmail: null,
      start_date: null,
      end_date: null,
      projectEmpty: false,
      currentTaskIndex: null,
      taskEntered : false,
      pname: '',
      //dashboard properties
      currentProj: '',
      tasList: [],
      projList: [],
      xparrole:'',
      xparemail:'',
      membersList: [],
      noOfPart: null,
      currentTeam: null,
      team_model: '',
      intervalOne: null,
      //implies you can store anything in this data variable 
      intervalTwo: null,
      dashboardPage: true,
      dloaded : false,
      teams: [],
      createTeamRe : '',
      loading : false,
      jwt_token : null,
      acct_type: null,
      teamName: null,
      participantEmail : null,
      participantRole : null,
      createText: 'Create A New Team',
      added: false,
      participants: [],



      // nav data
        blurEverything : false,
      // nav data
     
      email : '',
    company: '',
    password: '',
    companyre : '',
    emailre: '',
    totalre : '',
    verified: false,
    passre: '',
    theToken: '',
    accountType: '',
    activated: true,
    dn : false,
    rev : ''

    }
  },
  updated(){



  },
  mounted(){
    // alert($(window).width());
  $('.addTB').hide();
  $('.project-list').hide();
  $('.task-list').hide();
  $('.new-team-thread').hide();
  $('.new-existingt').hide();

  if (this.dashboardPage === true){
  this.intervalOne =  setInterval(function(){
 var theWindowWidth = $(window).width();
    var theWindowHeight = $(document).height();
 $('.wrap').css({'width':theWindowWidth});
 $('.wrapper').css({'width': theWindowWidth});
 $('.wrapper').css({'height': theWindowHeight});
if (theWindowWidth < 900){
  $('.add-pbox').addClass('width-mod');
  $('.add-pbox').removeClass('width-small');

  $('.add-team-box').addClass('width-mod');
  $('.add-team-box').removeClass('width-small');
  $('.p').addClass('smallf');


}
else{
  $('.add-pbox').removeClass('width-mod');
  $('.add-pbox').addClass('width-small');
  $('.p').removeClass('smallf');
  $('.add-team-box').removeClass('width-mod');
  $('.add-team-box').addClass('width-small');

}

$('.remove-team-box').click(function(){

  $('#team-lists').html(''); 

});
    },20);
   


var ctx = document.getElementById("myChart").getContext('2d');
var ctx1 = document.getElementById("myChart1").getContext('2d');
var ctx2 = document.getElementById("myChart2").getContext('2d');

// var ctx = document.getElementsByClassName("myChart").getContext('2d');
var chartjs = {
    type: 'bar',
    data: {
        labels: ["ProjectName"],
        datasets: [{
            label: 'Progress',
            data: [91],
            backgroundColor: [
                'rgb(65, 67, 115, 1)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(65, 67, 115, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }],
            xAxes: [{
               // Change here
             barPercentage: 0.2
           }]
        }
    }
};
var myChart = new Chart(ctx, chartjs);
var myChart = new Chart(ctx1, chartjs);
var myChart = new Chart(ctx2, chartjs);



$('.for-load').fadeOut(6000);
$('.menu-div').hide();
$('.nav-remove').hide();
var width = $(window).width();
// alert(width);
// interval functions for css
this.intervalTwo = setInterval(
  function(){

var docHeight = $(document).height();
$('.for-load').css({"height": docHeight});
var docHeight = $(window).height();

$('#loader').css({"top": (docHeight/2) - 30});



$('.nav-btn').click(function(){
$('.menu-div').show();
$('.nav-remove').show();
show = '.nav-remove';
$('.nav-btn').hide();

});
$('.nav-remove').click(function(){
$('.menu-div').fadeOut();
$('.nav-btn').show();
show = '.nav-btn';
$('.nav-remove').hide();

});
    var width = $(window).width();
    


//
  //the wrap css starts here

  if (width <= 991){
    $('.j-intro').css({"left":"20px","top":"70px"});
    $('.j-logo').css({"margin-left": "25px"});
    $('.intro-revity-para').css({'font-size': '22.0px'});
    $('.leftside').hide();
    $('.leftside').removeClass('col-sm-2');
    $('.main-side').removeClass('col-sm-12 col-lg-10 col-xl-10 col-md-12');
    $('.d-nav-btn').removeClass('display-none');  
    $('.d-nav-btn').show();
    $('#j-list').hide();
    $('.margin50').css({"margin-left":"-60px"});
    $('.main-side').css({'width':'100%'});

   

  }
  if (width > 991){
    $('.j-intro').css({"left":"60px", "top": "95px"});
    $('.j-logo').css({"margin-left": "60px"});
    $('.intro-revity-para').css({'font-size': '24.0px'});
    $('.leftside').addClass('col-sm-2');
    $('.main-side').addClass('col-sm-12 col-lg-10 col-xl-10 col-md-12');
    $('.leftside').show();
    $('.d-nav-btn').hide();
    $('#j-list').show();

    $('.menu-div').hide();
    $('.nav-remove').hide();
    $('.margin50').css({"margin-left":"-50px"});


  }

//
var theWidth = $('.dashboard').width();
var theHeight = $(document).height();
$('.jj-row').css({"width": theWidth});
// $('.add-team-box').css({ "height":  theHeight/2});

var pnameLeft = $('#pname').position();
var pnameLeft = pnameLeft.left - 5;

$('.pname-label').css({'left':pnameLeft});


//to align
var j_aligner = $('.j-aligner').position();
var j_aligner = j_aligner.left - 5;

$('.j-align').css({'left': j_aligner});

//new
var arrowPos = $('.arrow-down').position();
var arrowPos = arrowPos.left;
$('.tdp').css({"left": arrowPos - 100});

$('.existingc').css({
  "top" : "35px","position":"absolute"
});



// var j_navbar_div = $('.leftside').width();
// $('.chat-list-div').css({"width": j_navbar_div});

//new
},
1
);
//end the css interval checks








  





  // str = "",
  // //js has ishs with white space in quotes
  // html = $.parseHTML( str );
  $('.myprofile').hide();
$('#show-profile').click(
function(){
// $('.main-side').append('');
$('.dashboard').hide();
$('.existingt').hide();
$('.new-existingt').hide();
 $('.project-list').hide();
  $('.task-list').hide();
$('.myprofile').show();

});




//dashboardnav-btn control begin
$('.d-btn1').click(function(){

$('.d-btn').removeClass('d-btn-active');
$('.d-btn1').addClass('d-btn-active');

});


$('.add-team-box').hide();

$('.d-btn2').click(function(){

$('.d-btn').removeClass('d-btn-active');
$('.d-btn2').addClass('d-btn-active');
$('.d-btn-r').click();
$('.add-team-box').removeClass('display-none');
$('.add-team-box').show();


});
$('.d-btn3').click(function(){

$('.d-btn').removeClass('d-btn-active');
$('.d-btn3').addClass('d-btn-active');
$('.d-btn-r').click();
$('.d-btn-s').click();
});

$('.d-btn4').click(function(){

$('.d-btn').removeClass('d-btn-active');
$('.d-btn4').addClass('d-btn-active');
$('.d-btn-r').click();
$('.d-btn-s').click();


});

$('.d-btn5').click(function(){

$('.d-btn').removeClass('d-btn-active');
$('.d-btn5').addClass('d-btn-active');


});
//dasshboard nav btns control
$('.d-btn').click(function(){
  $('.new-team-thread').hide();
  $('.new-existingt').hide();
   $('.project-list').hide();
  $('.task-list').hide();

});
$('.d-btn-s').click(function(){
$('.d-nav-div').hide();
});
$('.d-btn-r').click(function(){
$('.remove-dark').click();

});

$('.d-nav-remove').hide();
$('.d-nav-div').hide();

$('.d-nav-btn').click(
function(){
$('.d-nav-div').removeClass('display-none');
$('.d-nav-btn').hide();
$('.d-nav-remove').show();
$('.d-nav-div').fadeIn('slow');

});



$('.d-nav-remove').click(function(){
  $('.d-nav-remove').hide();
  $('.d-nav-btn').show();
  $('.d-nav-div').fadeOut('slow');

});
$('.remove-team-box').click(function(){
  $('.add-team-box').hide();
});

//chats zone
  $('.wrapper').hide();

$('.new-chat').click(function(){$('.add-new-chat').show();$('.add-new-chat').removeClass('display-none');
  $('.wrapper').show();

$('.wrapper').addClass('overlay-dark');
});

$('.darken').click(function(){
$('.wrapper').show();
$('.wrapper').addClass('overlay-dark');
});

$('.remove-dark').click(function(){
$('.wrapper').hide();
$('.wrapper').removeClass('overlay-dark');

});
$('.chat-remove').click(function(){$('.add-new-chat').hide();
  $('.wrapper').hide();
$('.wrapper').addClass('overlay-dark');

});

$('.add-project').click(function(){$('.add-pbox').removeClass('display-none');$('.add-pbox').show();});
$('.p-remove').click(function(){$('.add-pbox').hide();});

//exising chat
$('.existingt').hide();//hides the chat thread

$('.existing-team').click(function(){

  $('.existingt').show();
  $('.dashboard').hide();
  $('.myprofile').hide();

});

$('.d').click(function(){  $('.existingt').hide();
  $('.dashboard').show();
  $('.myprofile').hide();});



//existing chat
  $('.existingc').hide();
  $('.existing-chat').click(function(){

    $('.existingc').show();


  });
  $('.remove-existingc').click(function(){
    $('.existingc').hide()
  });


//search function
  $('.search-panel').hide();

$('.j-search').click(function(){
  $('.search-panel').show();

});

$('.j-search-remove').click(function(){
  $('.search-panel').hide();

});



// team-dropdown button 
  $('.tdp').hide();

$('.team-dropdown').click(function(){
  $('.tdp').toggle('slow');
});

$('.add-par').click(function(){
$('.add-part').removeClass('display-none');

$('.add-part').toggle('slow');
});
$('.add-part').hide();

$('.remove-addpar').click(function(){
$('.add-part').hide('slow');
});




//the nav buttons
$('.d-btn1').click(function(){
  $('.d-btn').removeClass('d-btn-active');
  $('.d-btn1').addClass('d-btn-active');
});

$('.d-btn2').click(function(){
  $('.d-btn').removeClass('d-btn-active');
  $('.d-btn2').addClass('d-btn-active');
});

$('.d-btn3').click(function(){
  $('.d-btn').removeClass('d-btn-active');
  $('.d-btn3').addClass('d-btn-active');
});

$('.d-btn4').click(function(){
  $('.d-btn').removeClass('d-btn-active');
  $('.d-btn4').addClass('d-btn-active');
});


$('.d-btn5').click(function(){
  $('.d-btn').removeClass('d-btn-active');
  $('.d-btn5').addClass('d-btn-active');
});

//end of the nacv buttons control


// add extra part jquery
$('.add-extra-part').click(function(){
  $('.add-extra-part-box').removeClass('display-none');
  $('.add-extra-part-box').show('slow');
});

$('.r-add-extra-part-box').click(function(){
 $('.add-extra-part-box').hide();
});

// end of add extra part jquery






//add are u sure box
$('.are-you-sure').click(function(){
  $('.are-you-sure-box').removeClass('display-none');
  $('.are-you-sure-box').show('slow');
});

$('.r-are-you-sure-box').click(function(){
 $('.are-you-sure-box').hide();
});
//add are you sure box




}

  },
  beforeDestroy(){

this.dashboardPage = false;

  },
  destroyed(){
    this.dashboardPage = false;
    clearInterval(this.intervalOne);
    clearInterval(this.intervalTwo);

  },
  methods: {
    closeTB: function(){
      $('.addTB').hide();
      $('.wrapper').hide();
      $('.wrapper').removeClass('overlay-dark');
    },
    addTask: function(){

        this.task_name_reply = '';
        this.assignee_reply = '';
        this.date_reply = '';
        this.milestone_reply = '';
     var theUrl = 'http://api.revityapp.com/task/create/'+this.jwt_token;

     // var start_date = this.start_date.split("-");
     // start_date = start_date.reverse();

     //  var end_date = this.end_date.split("-");
     // end_date = end_date.reverse();

     // start_date = start_date.join('/');
     // end_date = end_date.join('/');

     var start_date = this.start_date;
     start_date = start_date.split("-");
     var year = start_date[0];
     var month =  start_date[1];
     var day =  start_date[2];

     start_date = month+'/'+day+'/'+year;
 

     //end date authent
     var end_date = this.end_date;
     end_date = end_date.split("-");
     var year = end_date[0];
     var month =  end_date[1];
     var day =  end_date[2];

     end_date = month+'/'+day+'/'+year;
     console.log(end_date);

       axios.post(theUrl,
        {
           team_name : this.currentTeam,
           project_name : this.currentProj,
           task_name : this.taskNam,
           milestone: this.mileston,
           assignee: this.asEmail,
           start_date: start_date,
           end_date: end_date
        },//the data to post
      {
        'Content-type': 'application/x-www-form-urlencoded',

      })//end of axios.post\
      .then((res)=>{
        console.log(res);
        if (res.data.message === 'invalid_taskname'){
          this.task_name_reply = res.data.reason;
        }
        if (res.data.message === 'invalid_milestone'){
          this.milestone_reply = res.data.reason;
        }
        if (res.data.message === 'invalid_assignee'){
          this.assignee_reply = res.data.reason;
        }
         if (res.data.message === 'email_not_exist'){
            this.assignee_reply = res.data.reason;
        }
        if (res.data.message === 'invalid_start_date' || res.data.message === 'invalid_end_date'){
          this.date_reply = res.data.reason;
        }
        if (res.data.message === 'true'){
          console.log(res.data.reason);
            setTimeout(function(){location.reload();}, 100); 

        }
        if (res.data.message === 'error'){
          console.log(res.data.reason);
        }


      });

    },
    addTaskBox : function(){
      $('.wrapper').show();
      $('.wrapper').addClass('overlay-dark');
      $('.addTB').show();
     
    },
    deleteTask: function(task_name){

         var theUrl = 'http://api.revityapp.com/task/'+this.currentTeam+'/'+this.currentProj+'/'+this.jwt_token;

      axios.delete(theUrl,{data: {task_name : task_name}})
      .then((res)=>{
        console.log(res);
          if (res.data.message == 'true'){
            setTimeout(function(){location.reload();}, 100); 
            }

      })
   
    },
    deleteProj: function(proj){
       var theUrl = 'http://api.revityapp.com/project/'+this.currentTeam+'/'+this.jwt_token;

      axios.delete(theUrl, {data: {project_name: proj}})
      .then((res)=>{
          if (res.data.message == 'true'){
            setTimeout(function(){location.reload();}, 100); 
            }

      })
    },
    projectList: function(){
        this.taskEntered = true;
        this.loading = true;
        this.projList = [];
       var theUrl = 'http://api.revityapp.com/project/'+this.currentTeam+'/'+this.jwt_token;

          axios.get(theUrl).then((res)=>{
            var counter = 0;

            if (res.data.res == true)
            {

            if (res.data.message == 'empty'){

              console.log('empty');
             this.projectEmpty = true;

            }


            if(res.data.reason == "Data was found"){
              this.projectEmpty = false;
              console.log('not empty');
              console.log(res);
                var counterLimit = res.data.data.length;
                while(counter < counterLimit){

              this.projList.push(res.data.data[counter]);
              counter++;

            }
            counter = 0;
            while(counter < counterLimit){
              this.projList[counter].index = counter;
              counter++;
            }
            }

            

              }
            
            $('.project-list').show();
            $('.d-btn').removeClass('d-btn-active');
            $('.dashboard').hide();
            $('.existingt').hide();
            $('.new-team-thread').hide();
            $('.new-existingt').hide();
            $('.add-part').hide();
            $('.myprofile').hide();
            $('new-existingt').hide();
            $('.task-list').hide();
            $('.taskdiv').hide();

             


            this.loading = false;
            console.log(this.projList);

          });


    },
    goBack: function(){

            $('.project-list').hide();
            $('.d-btn').removeClass('d-btn-active');
            $('.dashboard').hide();
            $('.existingt').hide();
            $('.new-team-thread').show();
            $('.new-existingt').show();
            $('.add-part').hide();
            $('.myprofile').hide();
         
            $('.task-list').hide();
            $('.taskdiv').hide();

    },
    taskList: function(projname, index){
        this.taskEntered = false;
        // this.loading = true;
        this.currentProj = projname;
        var key = 'key'+index;
        for (x in this.tasList){
          if (x.key === key){
            x.taskName = null;
          }
        }
        // this.tasList = [];
        this.currentTaskIndex = index;
       var theUrl = 'http://api.revityapp.com/task/'+this.currentTeam+'/'+projname+'/'+this.jwt_token;
      
      var el =  document.getElementsByClassName('taskdiv');
      // console.log(el[index]);
      var y = el;
      $(y).hide();
      var x = el[index];
      $(x).removeClass('display-none');
      $(x).toggle();


          axios({
          url: theUrl,
          method: 'get',
          data: {
            project_name : projname
          }
          }).then((res)=>{
         
           if (res.data.message == 'empty'){
            this.ttaskEmpty = true;         
            var key = 'key'+this.currentTaskIndex;
            var x = [{key : key, taskName : res.data.message}];
            //you can only communicate between variables in an object is by what is on the right hand side
           
            this.tasList = x;
            // this.tasList.push(x);
            console.log(this.tasList);
           }
           else{
            this.ttaskEmpty = false;
            console.log(res);
            this.tasList = res.data.data.tasks;
           }

          });

     
    },
    createProj: function(){

      this.loading = true;
      var theUrl = 'http://api.revityapp.com/project/create/'+this.jwt_token;

       axios.post(theUrl,
        {
           team_name : this.currentTeam,
           project_name : this.pname,
        },//the data to post
      {
        'Content-type': 'application/x-www-form-urlencoded',

      })//end of axios.post\
      .then((res)=>{ this.loading = false; console.log(res);
            setTimeout(function(){location.reload();}, 100); 

      });
    },
    removePar: function(parsed){

      var theUrl = ' http://api.revityapp.com/team/remove/participant/'+this.jwt_token;
      // console.log(this.membersList[0]);
      var theMem =[];
      var heel = {email: 'ds@dwedc.com', role: 'HOD'};
      theMem.push(heel);
      axios.post(theUrl,
        {
           team_name : this.currentTeam,
           participants: JSON.stringify(theMem),
        },//the data to post
      {
        'Content-type': 'application/x-www-form-urlencoded',

      })//end of axios.post\
      .then((res)=>{
        console.log(res);
      })

    },
    addExtraPart: function(){
      this.loading = true;
       var theUrl = 'http://api.revityapp.com/team/add/participant/'+this.jwt_token;
       var participant = [{ email: this.xparemail, role : this.xparrole}];
       // console.log(this.currentTeam);
       // console.log(JSON.stringify(participant));
       // console.log(participant);
       axios.post(theUrl,
        {
           team_name : this.currentTeam,
           participants: JSON.stringify(participant),
        },//the data to post
      {
        'Content-type': 'application/x-www-form-urlencoded',

      })//end of axios.post
 
      .then((res)=>{

        console.log(res);
      this.loading = false;
      //reply here
      if (res.data.res = false){
        this.parre = res.data.reason;
      }
      if (res.data.message == 'true'){
     setTimeout(function(){location.reload();}, 100); 

      }

      });

    },
    deleteTeam: function(){
      this.loading = true;
       var theUrl = 'http://api.revityapp.com/team/'+this.jwt_token;

       // axios({
       //  method : 'DELETE',
       //  url: theUrl,
       //  params: { team_name : this.currentTeam},
       //  'Content-type': 'application/x-www-form-urlencoded'
       // })
      axios.delete(theUrl, {data: {team_name: this.currentTeam}})
      .then((res)=>{
        console.log(this.currentTeam);
        console.log(res);
         if (res.data.message == 'true'){
     setTimeout(function(){location.reload();}, 10); 
        
      }
        this.loading = false;
      });
    },
    listMembers: function(){
      this.membersList = [];
       var theUrl = 'http://api.revityapp.com/team/'+this.currentTeam+'/'+this.jwt_token;

          axios.get(theUrl).then((res)=>{
            var counter = 0;
            if (res.data.message == 'team_empty'){

            }
              else{

                var counterLimit = res.data.data.length;
                while(counter < counterLimit){

              this.membersList.push(res.data.data[counter]);
              counter++;
            }
            counter = 0;
            while(counter < counterLimit){
              this.membersList[counter].index = counter;
              counter++;
            }

              }
            
            console.log(this.membersList);
          });
    },
    detTeamActiveMain: function(parsed){
      this.loading = true;
      var done = 0;
      var el =  document.getElementsByClassName('teamm');
      var counter = 0;
      while(counter < el.length)
          {
              el[counter].classList.remove('team-active');
               counter++;
          }
          el[parsed].classList.add('team-active');

          console.log(el[parsed].innerHTML);
          this.currentTeam = el[parsed].innerHTML;
          

          //getNoOfParticipants
          var theUrl = 'http://api.revityapp.com/team/'+this.currentTeam+'/'+this.jwt_token;
          axios.get(theUrl).then((res)=>{
            console.log(res);
            console.log(res.data.data);
            if (res.data.message == 'team_empty'){
               var theUrl = 'http://api.revityapp.com/team/'+this.jwt_token;

      axios.delete(theUrl, {data: {team_name: this.currentTeam}})
      .then((res)=>{ this.loading = false; 
     setTimeout(function(){location.reload();}, 10); 

      });
            }
            else{
              this.noOfPart = res.data.data.length;             
            done = 1;
            console.log('done is '+ done);

          //conventional things to remove and show
          $('.tdp').hide();
          $('.d-btn').removeClass('d-btn-active');
          $('.dashboard').hide();
          $('.existingt').hide();
          $('.new-team-thread').show();
          $('.new-existingt').show();
          $('.add-part').hide();
          $('.myprofile').hide();
          $('new-existingt').show();
          $('.project-list').hide();
          $('.task-list').hide();
          
          this.loading = false;
            }
          this.loading = false;
            
          });

        


  


    },
      detTeamActive: function(parsed){
      
      //dom manipulation


     this.loading = true;
      var done = 0;
      var el =  document.getElementsByClassName('team');
      var counter = 0;
      while(counter < el.length)
          {
              el[counter].classList.remove('team-active');
               counter++;
          }
          el[parsed].classList.add('team-active');

          console.log(el[parsed].innerHTML);
          this.currentTeam = el[parsed].innerHTML;
          

          //getNoOfParticipants
          var theUrl = 'http://api.revityapp.com/team/'+this.currentTeam+'/'+this.jwt_token;
          axios.get(theUrl).then((res)=>{
            console.log(res);
            console.log(res.data.data);
            this.noOfPart = res.data.data.length;             
            done = 1;
            console.log('done is '+ done);

          $('.tdp').hide();
          $('.d-btn').removeClass('d-btn-active');
          $('.dashboard').hide();
          $('.new-team-thread').show();
          $('.new-existingt').show();
          $('.d-nav-div').hide();
          $('.existingt').hide();
          $('.wrapper').hide();
          $('.add-part').hide();
          $('.myprofile').hide();
          $('.wrapper').removeClass('overlay-dark');  
          $('new-existingt').show();
          $('.project-list').hide();
          $('.task-list').hide();

          this.loading = false;
          });

        

    },

    placeMember: function(){

      var participantsObj = {"email": this.participantEmail , "role": this.participantRole}
      this.participants.push(participantsObj);

      this.participantEmail = '';
      this.participantRole ='';
    
      $('#participant-email').focus();

      this.added = true;

    },
    createNewTeam: function(){
      this.loading = true;
      this.createTeamRe = '';
      var postUrl = 'http://api.revityapp.com/team/create/'+String(this.jwt_token);
        console.log(postUrl);
        console.log(this.teamName);
        console.log(this.participants);
        var obj = {"email":"creative.joe007@gmail.com","role":"CEO"};

        var parLength = this.participants.length;
        var parCounter = 0;
        console.log(parLength);
        if (parLength > 0){
             while (parCounter < parLength){
          console.log(this.participants.length);
          if (this.participants.length > 0){


               axios.post(postUrl,
        {
           team_name : this.teamName,
           participants: JSON.stringify(this.participants[parCounter]),
        },//the data to post
      {
        'Content-type': 'application/x-www-form-urlencoded',

      })//end of axios.post

      .then((res)=>{
        if (res.data.message === 'true'){
          this.createTeamRe = res.data.reason;
          $('.add-team-box').hide();
          $('.wrapper').hide();
          $('.wrapper').removeClass('overlay-dark');
          setTimeout(function(){location.reload();}, 100); 


        }
        else{
          this.createTeamRe = res.data.reason;
        }
        this.loading = false;
        console.log(this.jwt_token);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
        this.loading = false;
      });


          }
          if (this.participants.length === 0){
            this.loading = false;
            console.log('got here')
          }
           

      parCounter++;  

        }//end of the while loop

        }
        else{
          this.loading = false;
          this.createTeamRe = 'You have to click the add button';

        }
     

  


    },


    // nav method
    blurBg: function(bool){
        if (this.blurBg.bool = true)
        {
        this.blurEverything = true;
        }
        if (this.blurBg.bool = false){
          this.blurEverything = false;
        }
      },//end of nav method

      activate: function(){
        axios.post('http://api.revityapp.com/account/confirm',
        {
           code: this.otp,
        },//the data to post
      {
        'Content-type': 'application/x-www-form-urlencoded',

      })//end of axios.post
        .then((res)=>{
          if (res.data.message == "confirmed"){
            signin();

          }
          else{
            this.otpre = "the otp you entered was invalid";
          }

        });
      },

      resend: function(){
        axios.post('http://api.revityapp.com/account/resend',
        {
           email: this.email,
        },//the data to post
      {
        'Content-type': 'application/x-www-form-urlencoded',

      })//end of axios.post
        .then((res) =>{
          console.log(res);
          if (res.data.message == "resent"){
            this.otpre = "";
          }
            else {
            this.otpre = res.data.reason;
          }
        });
      },

        signin : function(){

    this.passre = '';
    this.totalre = '';
    axios.post('http://api.revityapp.com/account/login',
    {
      // email: this.email,
        // company: this.company,
            email: this.email,
            company: this.company,
            password: this.password,
    },
    {
        'Content-type': 'application/x-www-form-urlencoded',
    })
    .then((res) => {
      if (res.data.message === "true"){
        this.theToken = res.data.jwt_token;
        this.accountType = res.data.account_type;
    this.showd = true;


              }

      if (res.data.message === 'invalid_password'){
      this.passre = "Password is invalid"
      }
      if(res.data.message === 'not_activated'){
        this.totalre = "Check your email for the new OTP";
        resend();
        this.verified = false;
        this.dn = true;
        this.activated = false;
      }
      if (res.data.message !== "true" && res.data.message !== 'not_activated'){
       this.passre = "Check Your details again";
       // console.log(res);
      }
    })

  },
  checkEmailValue : function(myString){
  
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var booleanEmail = re.test(String(myString).toLowerCase());
    if (booleanEmail){
      return 'good';
    }
    else{
      return 'Enter a valid email address';
    }
  },//end of check my email value
    verifyy: function(){
      axios.post('http://api.revityapp.com/account/verify',
        {
          email: this.email,
          company: this.company,
        },//the data to post
      {
        'Content-type': 'application/x-www-form-urlencoded',

      })//end of axios.post
        .then((res) => {
          if (res.data.message == 'invalid_email'){
            this.emailre = res.data.reason;
          }
          if (res.data.message == 'invalid_company'){
            this.companyre = res.data.reason;
          }
          if (res.data.message == 'company_verified'){
            this.totalre = res.data.reason;
          }
          if (res.data.message == 'non_verified'){
            this.companyre = res.data.reason;
          }
          if (res.data.message == 'invalid'){
            this.emailre = res.data.reason;
          }
          if (res.data.message == 'verified'){
            this.totalre = 'Verified';
            this.verified = true;
            setTimeout(() => {this.totalre = '';},3000);
          }
        });


    },
    verify: function(){
        this.emailre = '';
        this.companyre = '';
        this.totalre = '';

      if (this.checkEmailValue(this.email) == 'good'){ this.verifyy();}
      else if (this.company.length < 1){
        this.companyre = 'You have to enter your company';
      }
      else if (this.email.length < 1){
        this.emailre = 'You have to enter your email';
      }
      else{
        this.emailre = this.checkEmailValue(this.email);
      }

    },//end of the verify method

  },
  updated(){

    if (this.taskEntered === true){
    $('.taskdiv').hide();      
    }
  },
  created(){
    this.teams = [];
    this.jwt_token = this.$session.get('jwt');
    this.acct_type = this.$session.get('acct_type');

        

    var theUrl = 'http://api.revityapp.com/team/admin/'+this.jwt_token;
    console.log(theUrl);

    axios.get(theUrl).then((res)=>{
      console.log(res);
      if (res.data.message === "empty"){
        var team = {'team_name': res.data.reason}
        this.teams.push(team);
        console.log(this.teams)
   this.dloaded = true;

      }
      else {
        console.log(res.data.data.length);
        var counterLimit = res.data.data.length;var counter = 0;
        var team = {};
        while (counter < counterLimit){
          
          team = {'team_name': res.data.data[counter].team_name, 'index': counter};

          counter++;

        this.teams.push(team);
          

        }
        console.log(team);
        console.log(res.data.data[0].team_name);
      }
   
    });



    
  },
  
}


</script>


























<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 500px){
.ctrlb{
display: none;
}
.jctrl{
  text-align: left;
}
}
@media screen and (min-width: 500px){
.del{
display: none;
}
.jctrl{
  text-align: right;
}
}
.pbtn{
  -webkit-transition: background-color 2s;
  transition: background-color 2s;
  transition-timing-function: ease-in-out;
}
.pbtnx{
   transition: border 4s;
  -webkit-transition: border 4s;
}
.pbtnx:hover{
  border: none !important;
}
.pbtn:hover{
  background-color: rgb(67, 72, 161)  !important;
  color: white !important;
}
.teamul{
  overflow-y: scroll;
  height: 150px;
}
.team{
  background-color: ;
  margin-top: 10px;
  cursor: pointer;
  font-size: 13px;
  text-align: center !important;
  list-style-type: none;
  
}
.teamm{
  background-color: ;
  margin-top: 10px;
  cursor: pointer;
  font-size: 13px;
  text-align: center !important;
  list-style-type: none;
}
.team:hover{
  background-color: #eee !important;
}
.team-active{
  border-left: 3px solid #4348a1;
}
.smallf{
  font-size: 9px;
}
@media screen and (max-width: 900px){
  .sss{
    display: none;
  }
  .profile-form {
  width: 90%;
  margin-left: 5%;
}
.team-thread{

}
}
.sss{
  -webkit-transition: opacity 2s;
  transition: opacity 2s;
}
.sss:hover{
  opacity: 0.65;
}
.nav-btns{
  top: 33px;
  right: 80px;
}
.nav-btns li{
list-style-type: none;
display: inline;
padding-right: 40px;
}
.nav-btns li button{
  padding: 10px;
  color: white;
  font-family: montserrat;
  border: none;
  border-radius: 3px;
  background-color: #4348a1;

}
.team {
  list-style-type : none;
  text-align: center;
}
.team-members{
  width: 60%;
  margin-left: 20%;
  font-family: montserrat;
  font-size: 15px;
  overflow-y: scroll;
  border-radius: 5px;
  margin-bottom: 14px;
}
#team-lists{
padding: 10px;
text-align: left;
}
#team-lists li{
  
}
.team-list{

  list-style-type: none;
  display: inline;
  /*color: white;*/
 color: #7499ef;
  padding: 6px;
  margin-right: 4px;
  
  /*box-shadow: 2px 3px 2px grey;*/
}
.display-none{
  display: none !important;
}
.red{
  color: red !important;
}
.activate-btn{
  color : white !important;
}
@media screen and (max-width: 768px){
  .connn{
    display: none;
  }
  .team-title{
    display: none;
  }
}
.verification-btn{
  color: white !important;
}
.row {
  font-family: montserrat !important;
}
.existingt ul li{list-style-type: none;}.existingt ul li a{cursor: pointer;}














.theDashboardSpot{
  text-align: left;
}
html,body{
overflow-x: hidden;

}

#j-list li{
  display: inline;
  padding-left: 70px;

}


.j-navbar{
  position: relative;
  top: 30px;
}

.j-logo{

}
.revity{
  background-color: rgba(255, 255, 255, 0.0);
top: 6px;
height: auto;
width: auto;
position: relative;
margin: 0;
font-family: "Lato", Helvetica, Arial, serif;
font-weight: 700;
font-style: normal;
font-size: 18.0px;
color: rgba(0, 0, 0, 1.0);
text-align: center;
line-height: 22.0px;
}

 #j-list{
  position: absolute;
  right: 30px;
  top: 30px;

}
#j-list li{
  padding-right: 40px;

}
.j-list-2 li{
  padding-top: 40px;
  list-style-type: none;
  text-align: center;

}
{
background-color: #7499ef !important;
}
.j-intro{
  text-align: left;
  position: relative;
  top: 90px;

  /*left: 59px;*/
}
.intro-revity-para{
    background-color: rgba(255, 255, 255, 0.0);
    height: auto;
    font-family: "Lato", Helvetica, Arial, serif;
    font-weight: 400;
    font-style: normal;
    color: rgba(9, 9, 9, 1.0);
    line-height: 34.0px;
}


.intro-revity-head{
  background-color: rgba(255, 255, 255, 0.0);
  padding-bottom: 22px;
    height: auto;
    margin: 0;
    font-family: "Lato-Semibold", Helvetica, Arial, serif;
    font-size: 42.0px;
    color: rgba(0, 0, 0, 1.0);

    line-height: 50.0px;
}

.first-img{
  max-width: 100%;
  position: relative;top: 90px;
}

.second-section{
    background-color: rgba(252, 252, 252, 1.0);
    height: auto;
    max-width: 100%;
    position: relative;
    margin-top: 260px;
    padding-bottom: 40px;
}
.ss:hover{background-color: #7499ef !important; text-decoration: none !important;color: white !important;}

.intro-2{
    background-color: rgba(255, 255, 255, 0.0);
    margin-top: 30px;
    height: auto;

    font-family: "Lato-Semibold", Helvetica, Arial, serif;
    font-size: 32.0px;
    color: rgba(0, 0, 0, 1.0);
    text-align: center;
    line-height: 39.0px;
}
.intro-2-para{
  background-color: rgba(255, 255, 255, 0.0);

height: auto;
font-family: "Lato", Helvetica, Arial, serif;
font-weight: 400;
font-style: normal;
font-size: 20.0px;
color: rgba(9, 9, 9, 1.0);
text-align: center;
line-height: 34.0px;
margin-bottom: 50px;
}
.third-section{
background-color: rgba(51, 79, 142, 1.0);
height: auto;
max-width: 100%;

left: 0px;
}
.thirdh{
      background-color: rgba(255, 255, 255, 0.0);
      height: auto;
      padding-top: 70px;
      font-family: "Lato-Semibold", Helvetica, Arial, serif;
      font-size: 32.0px;
      color: rgba(255, 255, 255, 1.0);
      text-align: center;
      line-height: 39.0px;
}
.thirdp{
background-color: rgba(255, 255, 255, 0.0);
height: auto;
margin-top: 25px;
left: 356px;
width : 55%;
font-family: "Lato", Helvetica, Arial, serif;
font-weight: 400;
font-style: normal;
font-size: 20.0px;
color: rgba(255, 255, 255, 1.0);
text-align: center;
line-height: 34.0px;
}

.overlay-back{
  position: absolute;
  top: 0; width : 100%;
  height: 100%;
  background: #000;
  opacity: 0.63;
  filter : alpha(opacity = 60);
  z-index: 5;
  display: none;
}

  .blur {
  -webkit-filter : blur(7px);
  -moz-filter : blur(7px);
  -ms-filter : blur(7px);
  -o-filter: blur(7px);
  filter: blur(7px);
  z-index: -3 !important;
  /*opacity: 0.2;*/

}
.overlay{
  position: absolute;
  top: 0px;
  left: 0;
  width : 100%;
  height: 100%;
  z-index: ;

}
.j-label{
  font-family: "Lato-Semibold", Helvetica, Arial, serif;
    font-size: 18.0px;
    color: rgba(0, 0, 0, 1.0);
    text-align: center;
    line-height: 22.0px;
}
.company-list li{
  padding-top: 20px;
  list-style-type: none;

}
.stages-list li {
  list-style-type : none;
  padding-top: 30px
}
.leftside-sub{
  max-width: 100%;
  margin-left: -20px;

}
.company-list2{
  padding-top: 20px;

}
.stages-list2{
  padding-bottom: 20px;

}
.company-list2 li{
  padding-left: 20px;
  list-style-type: none;
  display: inline;
}
.stages-list2 li {
  list-style-type : none;
  padding-left: 20px;
  display: inline;
}
.j-disappear{
  display: none;
}
.j-links{
  color: white;
}
.d-btn-active{
        padding-left: 14px ;margin-left: -14px; border-left: 4px solid #414373;
}
.d-btn:hover{
  background-color: #eee;
}
.dashdef li{
  display: inline;
}
.stats{
  margin-top: 40px;
  position: relative;
  left: 120px;
  /*to be dynamic*/
  /*margin-left: 30px*/
}
.display-none{
  display: none;
}
.overlay-dark{
  background-color: black;
  opacity: 0.45;

}
@media screen and (max-width : 990px){
.thread-pimg{
  margin-left: 30px;
  width: 40px !important;

}

.margin-control{
  margin-left: 85px;
  margin-top: -45px;
}
.add-par-font{
  display: none;
}
.gps{
  font-size: 22px ;
  margin-top: -4px;
  text-shadow: 1px 2px 2px grey;
  transition: font-size 2s;
  transition: margin-top 2s;
}
.gps:hover{
  font-size: 20px;
  margin-top: 0px;
}
}
@media screen and (min-width: 990px){
  .thread-pimg{
    margin-left: 36px
  }
  .margin-control{
  margin-left: -50px;
}
}

.new-date{
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #e2e6e6;
  line-height: 0.1em;
  margin: 10px 0 20px;
}
.new-date span{
  background-color: #fff;
  padding: 0 10px;
}

.ctime{
  color: #c9cece;
  font-weight: 200 !important;
}
.chatted-btn{
  margin-left: -40px;
}
.chatted-btn li{
  display: inline;
  list-style-type: none;
  padding-right: 20px;
}
.user-chat{
  border-radius: 4px !important;
}
.res-chat{
  border-radius: 4px !important;
}
.cimg{
  padding-bottom: 20px;

}
.rimg{
  max-width: 100}

.chat-list{
  
  position: relative; left: -40px;
  width: 100%;
}
  .chat-list li{
    list-style-type: none;
    padding-top: 25px;
    padding-right: ;

  }


  /* width */
::-webkit-scrollbar {
    cursor: pointer;
    width:5px;
    border-radius: 50px;
    /*height: 18px;*/
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    cursor: pointer;
    border-radius: 40px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background: #8e92e3; 
    border-radius: 50px;
    height: 19px;
    cursor: pointer;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #4348a1; 
}
#loader{
  animation-name: loading;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;

 

}

@keyframes loading{
from{
    -ms-transform: rotate(20deg); /* IE 9 */
    -webkit-transform: rotate(20deg); /* Safari */
    transform: rotate(20deg);
}
to{
    -ms-transform: rotate(290deg); /* IE 9 */
    -webkit-transform: rotate(290deg); /* Safari */
    transform: rotate(290deg);
}
}

.for-load{
  animation-name: fadeouttwo;
  animation-duration: 5s;
  animation-timing-function: ease-out;

}


@keyframes fadeouttwo{
  from{
    
     background-color: #fff;
      }
  to{
    background-color: transparent;
  }
}
.theDashboardSpot{

}
.width-mod{
  width: 90%;
  margin-left: 5%;
}
.width-small{
  width: 60%;
  margin-left: 20%;
}
.team-text{

}
.team-text{
  text-align: center;
}
.tdp ul li{
  list-style-type: none;
}
.teamfn{
  text-align: center;
  cursor:pointer;
  margin-left: -40px;
  margin-top: 3px;
}
.teamfn:hover{
background-color: #eee;
}
.taskbtn li{
  list-style-type: none;
  margin-right: 20px;
  display: inline;
}
.rr {
  color: red !important;
}
</style>
