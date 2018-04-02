<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <vue-good-table 
    class="tablecustomized"
      title="Instructions Status"
      :columns="columns1"
      :rows="rows1"
      :lineNumbers="true"
      styleClass="table table-bordered table-striped condensed" />
    <vue-good-table 
    class="tablecustomized"
      title="Reservation Stations"
      :columns="columns2"
      :rows="rows2"
      :lineNumbers="true"
      styleClass="table table-bordered table-striped condensed" />
    <vue-good-table 
    class="tablecustomized"
      title="Register Status"
      :columns="columns3"
      :rows="rows3"
      :lineNumbers="true"
      styleClass="table table-bordered table-striped condensed" />
      <br>
      <button class="btn btn-primary" style="float:right" @click="RunTomasulo(currstep)">Step Forward</button>
  </div>
</template>

<script>
export default {
  name: 'Tomasulo',
  data () {
    return {
      msg: 'Welcome to Tomasulo Algorithm World',
      columns1: [
        {
          label: 'STATUS',
          field: 'STATUS',
        },
        {
          label: 'STEP',
          field: 'STEP',
        },
        {
          label: 'FP_OPERATION',
          field: 'FP_OPERATION',
        },
        {
          label: 'OPERAND',
          field: 'OPERAND',
        },
        {
          label: 'OPERAND1',
          field: 'OPERAND1',
        },
        {
          label: 'OPERAND2',
          field: 'OPERAND2',
        },
        {
          label: 'FINISHED',
          field: 'FINISHED',
        },
        {
          label: 'EACHSTEPCOUNTER',
          field: 'EACHSTEPCOUNTER',
        }
      ],
      rows1: [
        {STATUS:'', STEP:1, FP_OPERATION:'L.D', OPERAND:'F6', OPERAND1: '32(R2)', OPERAND2: null, FINISHED: false, EACHSTEPCOUNTER:0},
        {STATUS:'', STEP:2, FP_OPERATION:'L.D', OPERAND:'F2', OPERAND1: '44(R3)', OPERAND2: null, FINISHED: false, EACHSTEPCOUNTER:0},
        {STATUS:'', STEP:3, FP_OPERATION:'MUL.D', OPERAND:'F0', OPERAND1: 'F2', OPERAND2: 'F4', FINISHED: false, EACHSTEPCOUNTER:0},
        {STATUS:'', STEP:4, FP_OPERATION:'SUB.D', OPERAND:'F8', OPERAND1: 'F2', OPERAND2: 'F6', FINISHED: false, EACHSTEPCOUNTER:0},
        {STATUS:'', STEP:5, FP_OPERATION:'DIV.D', OPERAND:'F10', OPERAND1: 'F0', OPERAND2: 'F6', FINISHED: false, EACHSTEPCOUNTER:0},
        {STATUS:'', STEP:6, FP_OPERATION:'ADD.D', OPERAND:'F6', OPERAND1: 'F8', OPERAND2: 'F2', FINISHED: false, EACHSTEPCOUNTER:0},
      ],
      columns2: [
        {
          label: 'Name',
          field: 'Name',
        },
        {
          label: 'Busy',
          field: 'Busy',
        },
        {
          label: 'Op',
          field: 'Op',
        },
        {
          label: 'Vj',
          field: 'Vj',
        },
        {
          label: 'Vk',
          field: 'Vk',
        },
        {
          label: 'Qj',
          field: 'Qj',
        },
        {
          label: 'Qk',
          field: 'Qk',
        },
        {
          label: 'Time',
          field: 'Time',
        }
      ],
      rows2: [
        {Name:'ADD1', Busy:'NO', Op:null, Vj:null, Vk: null, Qj: null, Qk: null, Time: null},
        {Name:'ADD2', Busy:'NO', Op:null, Vj:null, Vk: null, Qj: null, Qk: null, Time: null},
        {Name:'ADD3', Busy:'NO', Op:null, Vj:null, Vk: null, Qj: null, Qk: null, Time: null},
        {Name:'MUL1', Busy:'NO', Op:null, Vj:null, Vk: null, Qj: null, Qk: null, Time: null},
        {Name:'MUL2', Busy:'NO', Op:null, Vj:null, Vk: null, Qj: null, Qk: null, Time: null},
      ],
      columns3: [
        {
          label: 'Qi',
          field: 'Qi',
        },
        {
          label: 'Instruction',
          field: 'Instruction',
        }
      ],
      rows3: [
        {Qi:'F0', Instruction: null},
        {Qi:'F2', Instruction: null},
        {Qi:'F4', Instruction: null},
        {Qi:'F6', Instruction: null},
        {Qi:'F8', Instruction: null},
        {Qi:'F10', Instruction: null},
      ],
      loadstep:2,
      addstep:2,
      substep:2,
      mulstep:10,
      divstep:20,
      currstep:0,
      currstep2:1,
    }
  },
  methods:{
    RunTomasulo(step){
      if(step<this.rows1.length){
        this.rows1[step].STATUS='ISSUED'
      }
        for(var i=0;i<this.currstep2;i++){
          this.ExecuteTomasulo(i)
        }
        this.CheckExecuted(this.currstep2)
        if(this.currstep2<this.rows1.length){
          this.currstep2+=1
        }
      this.currstep=step+1
    },
    CheckExecuted(step){
      for(var i=0;i<step;i++){
      if(this.rows1[i].STATUS=='EXECUTED'){
        this.rows1[i].STATUS='WRITTEN'
      }
      if(this.rows1[i].STATUS=='ISSUED'&&this.rows1[i].FINISHED){
          this.rows1[i].STATUS='EXECUTED'
      }
      }
    },
    ExecuteTomasulo(step){
      if(this.rows1[step].FP_OPERATION=='L.D')
      {
        if(this.rows1[step].EACHSTEPCOUNTER==this.loadstep){
          this.rows1[step].FINISHED=true
        }
        else{
          this.rows1[step].EACHSTEPCOUNTER+=1
        }
        this.WriteRegister(step)
      }
      if(this.rows1[step].FP_OPERATION=='ADD.D')
      {
        if(this.rows1[step].EACHSTEPCOUNTER==this.addstep){
          this.rows1[step].FINISHED=true
        }
        else{
          this.rows1[step].EACHSTEPCOUNTER+=1
        }
        this.WriteRegister(step)
      }
      if(this.rows1[step].FP_OPERATION=='SUB.D')
      {
        if(this.rows1[step].EACHSTEPCOUNTER==this.substep){
          this.rows1[step].FINISHED=true
        }
        else{
          this.rows1[step].EACHSTEPCOUNTER+=1
        }
        this.WriteRegister(step)
      }
      if(this.rows1[step].FP_OPERATION=='MUL.D')
      {
        if(this.rows1[step].EACHSTEPCOUNTER==this.mulstep){
          this.rows1[step].FINISHED=true
          }
          else{
                this.rows1[step].EACHSTEPCOUNTER+=1
          }
      }
      if(this.rows1[step].FP_OPERATION=='DIV.D')
      {
        if(this.rows1[step].EACHSTEPCOUNTER==this.divstep){
          this.rows1[step].FINISHED=true
        }
        else{
          this.rows1[step].EACHSTEPCOUNTER+=1
        }
        this.WriteRegister(step)
      }
    },
    WriteRegister(step){
          if(this.rows1[step].OPERAND=='F0'){
            this.rows3[0].Instruction=this.rows1[step].FP_OPERATION
          }
          if(this.rows1[step].OPERAND=='F2'){
            this.rows3[1].Instruction=this.rows1[step].FP_OPERATION
          }
          if(this.rows1[step].OPERAND=='F4'){
            this.rows3[2].Instruction=this.rows1[step].FP_OPERATION
          }
          if(this.rows1[step].OPERAND=='F6'){
            this.rows3[3].Instruction=this.rows1[step].FP_OPERATION
          }
          if(this.rows1[step].OPERAND=='F8'){
            this.rows3[4].Instruction=this.rows1[step].FP_OPERATION
          }
          if(this.rows1[step].OPERAND=='F10'){
            this.rows3[5].Instruction=this.rows1[step].FP_OPERATION
          }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
