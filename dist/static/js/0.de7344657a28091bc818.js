webpackJsonp([0],{281:function(t,e,a){function l(t){a(350)}var n=a(7)(a(325),a(378),l,"data-v-67ffa71a",null);t.exports=n.exports},292:function(t,e,a){"use strict";function l(t){return/^1[3|4|5|8][0-9]\d{4,8}$/.test(t)}e.a=l},293:function(t,e,a){"use strict";function l(t,e){return a.i(p.a)({url:t,method:"get",params:e})}function n(t){return a.i(p.a)({url:"/community/banner_type",method:"POST",data:t})}function i(t){return a.i(p.a)({url:"/community/banner_type/status/"+t,method:"put"})}function o(t){return a.i(p.a)({url:"/community/banner_type",method:"put",data:t})}function s(t){return a.i(p.a)({url:"/community/banner",method:"POST",data:t})}function r(t){return a.i(p.a)({url:"/community/banner",method:"put",data:t})}function u(t){return a.i(p.a)({url:"/community/banner/"+t,method:"delete"})}function c(t){return a.i(p.a)({url:"/community/goods",method:"POST",data:t})}function m(t){return a.i(p.a)({url:"/community/goods",method:"put",data:t})}function d(t){return a.i(p.a)({url:"/community/goods/"+t+"/status",method:"put"})}e.a=l,e.b=n,e.j=i,e.c=o,e.h=s,e.i=r,e.g=u,e.e=c,e.f=m,e.d=d;var p=a(108)},299:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hongbao",props:{data:{type:Object,default:function(){return{targetCount:null,targetRate:[{pos:1,rate:null}]}}}},data:function(){return{realData:this.data}},methods:{getData:function(){this.$emit("getProData",this.realData)},add:function(){this.realData.targetRate.push({pos:1,rate:null})},minus:function(){this.realData.targetRate.pop()}}}},325:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a(293),n=(a(292),a(358)),i=a.n(n);e.default={data:function(){return{enable:"1",dateRange:null,temp:{game:{name:null,keyWord:null,check:!1,dateRange:null,phone:"1",message:"1",gameText:null,status:"1"},join:{total:null,day:null,dayBingo:null,bingoTime:null,rate:null}},tableData:null,total:null,dialogFormVisible:!1,dialogStatus:"",rules:{name:[{required:!0,message:"请输入分类名称",trigger:"blur"}],code:[{required:!0,message:"请输入标识",trigger:"blur"}]},listQuery:{pageNumber:1,pageSize:20},textMap:{update:"编辑",create:"新增"}}},created:function(){this.getTableData()},methods:{goList:function(t){this.$router.push({path:"/community/fnlist",query:{id:t}})},dateRangeChange:function(){this.temp.startTime=new Date(this.dateRange[0]).getTime(),this.temp.endTime=new Date(this.dateRange[1]).getTime()},getTableData:function(){var t=this;a.i(l.a)("/community/banner_type/page",this.listQuery).then(function(e){if(0===e.code){var a=e.data;t.total=a.total,t.tableData=a.data}})},handleCreate:function(){this.dialogStatus="create",this.dialogFormVisible=!0},handleUpdate:function(t){this.dateRange=[],this.dateRange.push(new Date(t.startTime)),this.dateRange.push(new Date(t.endTime)),this.enable=t.enable.toString(),this.temp=t,this.dialogStatus="update",this.dialogFormVisible=!0},resetTemp:function(){this.temp={game:{name:null,keyWord:null,check:!1,dateRange:null,phone:"1",message:"1",gameText:null,status:"1"},join:{total:null,day:null,dayBingo:null,bingoTime:null,rate:null}}},getHongbaoData:function(t){this.hongbaodata=t},create:function(){this.$refs.hongbao.getData(),console.log("honbao",this.hongbaodata)},update:function(){var t=this;if(this.temp.enable=this.enable,!this.temp.startTime||!this.temp.endTime)return void this.$message.error("请选择时间范围");a.i(l.c)(this.temp).then(function(e){0===e.code&&(t.getTableData(),t.dialogFormVisible=!1,t.$message.success("保存成功"))})}},components:{Hongbao:i.a}}},337:function(t,e,a){e=t.exports=a(254)(!1),e.push([t.i,".w50[data-v-37987982]{display:inline-block;width:50%}",""])},340:function(t,e,a){e=t.exports=a(254)(!1),e.push([t.i,".w50[data-v-67ffa71a]{display:inline-block;width:50%}",""])},347:function(t,e,a){var l=a(337);"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);a(255)("44d2cb12",l,!0)},350:function(t,e,a){var l=a(340);"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);a(255)("5829313c",l,!0)},358:function(t,e,a){function l(t){a(347)}var n=a(7)(a(299),a(369),l,"data-v-37987982",null);t.exports=n.exports},369:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form-item",{attrs:{label:"中奖人数","label-width":"130px"}},[a("div",{staticClass:"w50"},[a("el-input",{attrs:{placeholder:"请输入中奖人数"},model:{value:t.realData.targetCount,callback:function(e){t.realData.targetCount=e},expression:"realData.targetCount "}})],1)]),t._v(" "),a("el-form-item",{attrs:{label:"中奖比例（%）","label-width":"130px"}},[a("div",{staticClass:"w50"},t._l(t.realData.targetRate,function(e,l){return a("el-form-item",{staticStyle:{"margin-bottom":"5px"},attrs:{"label-width":"10px"}},[a("div",[a("span",[t._v("第"+t._s(l+1)+"位")]),t._v(" "),a("el-input",{staticClass:"w50",attrs:{placeholder:"请输入中奖比例"},model:{value:e.rate,callback:function(t){e.rate=t},expression:"item.rate"}}),t._v(" "),0===l?a("el-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.add}}):a("el-button",{attrs:{type:"primary",icon:"minus"},on:{click:t.minus}})],1)])}))])],1)},staticRenderFns:[]}},378:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"edit"},on:{click:t.handleCreate}},[t._v("新增\n    ")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"活动ID",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"活动类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"活动名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.bannerCount))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"活动预览"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("formatDateTime")(e.row.startTime)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"开始时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("formatDateTime")(e.row.endTime)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"结束时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.code))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("formatDateTime")(e.row.createTime)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"btn btn-sm btn-info",attrs:{size:"small",type:"info"},on:{click:function(a){t.handleUpdate(e.row)}}},[t._v("编辑\n        ")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"success"},on:{click:function(a){t.goList(e.row.id)}}},[t._v("停止\n        ")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":t.listQuery.pageNumber,"page-size":t.listQuery.pageSize,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.getTableData,"update:currentPage":function(e){t.listQuery.pageNumber=e}}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,size:"full"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"活动设置"}},[a("el-form-item",{attrs:{label:"活动名称","label-width":"80px"}},[a("div",{staticClass:"w50"},[a("el-input",{attrs:{placeholder:"请输入活动名称"},model:{value:t.temp.game.name,callback:function(e){t.temp.game.name=e},expression:"temp.game.name"}})],1)]),t._v(" "),a("el-form-item",{attrs:{label:"关键字","label-width":"80px"}},[a("div",{staticClass:"w50"},[a("el-input",{attrs:{placeholder:"请输入关键字"},model:{value:t.temp.game.keyWord,callback:function(e){t.temp.game.keyWord=e},expression:"temp.game.keyWord"}}),t._v(" "),a("el-checkbox",{model:{value:t.temp.game.check,callback:function(e){t.temp.game.check=e},expression:"temp.game.check"}},[t._v("回复关键字推送活动")])],1)]),t._v(" "),a("el-form-item",{attrs:{label:"活动时间","label-width":"80px"}},[a("div",{staticClass:"w50"},[a("el-date-picker",{attrs:{type:"daterange",placeholder:"选择日期范围"},on:{change:t.dateRangeChange},model:{value:t.temp.game.dateRange,callback:function(e){t.temp.game.dateRange=e},expression:"temp.game.dateRange"}})],1)]),t._v(" "),a("el-form-item",{attrs:{label:"手机号","label-width":"80px"}},[a("div",{staticClass:"w50"},[a("div",{staticClass:"checkitem"},[a("el-radio",{staticClass:"radio",attrs:{label:"1"},model:{value:t.temp.game.phone,callback:function(e){t.temp.game.phone=e},expression:"temp.game.phone"}},[t._v("需要")]),t._v(" "),a("el-radio",{staticClass:"radio",attrs:{label:"0"},model:{value:t.temp.game.phone,callback:function(e){t.temp.game.phone=e},expression:"temp.game.phone"}},[t._v("不需要")])],1)])]),t._v(" "),a("el-form-item",{attrs:{label:"短信验证","label-width":"80px"}},[a("div",{staticClass:"w50"},[a("div",{staticClass:"checkitem"},[a("el-radio",{staticClass:"radio",attrs:{label:"1"},model:{value:t.temp.game.message,callback:function(e){t.temp.game.message=e},expression:"temp.game.message"}},[t._v("需要")]),t._v(" "),a("el-radio",{staticClass:"radio",attrs:{label:"0"},model:{value:t.temp.game.message,callback:function(e){t.temp.game.message=e},expression:"temp.game.message"}},[t._v("不需要")])],1)])]),t._v(" "),a("el-form-item",{attrs:{label:"活动规则","label-width":"80px"}},[a("div",{staticClass:"w50"},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入活动规则"},model:{value:t.temp.game.gameText,callback:function(e){t.temp.game.gameText=e},expression:"temp.game.gameText"}})],1)]),t._v(" "),a("el-form-item",{attrs:{label:"活动状态","label-width":"80px"}},[a("div",{staticClass:"w50"},[a("div",{staticClass:"checkitem"},[a("el-radio",{staticClass:"radio",attrs:{label:"1"},model:{value:t.temp.game.status,callback:function(e){t.temp.game.status=e},expression:"temp.game.status"}},[t._v("开启")]),t._v(" "),a("el-radio",{staticClass:"radio",attrs:{label:"0"},model:{value:t.temp.game.status,callback:function(e){t.temp.game.status=e},expression:"temp.game.status"}},[t._v("关闭")])],1)])])],1),t._v(" "),a("el-tab-pane",{attrs:{label:"参与设置"}},[a("el-form-item",{attrs:{label:"每人总次数","label-width":"150px"}},[a("div",{staticClass:"w50"},[a("el-input",{attrs:{placeholder:"请输入活动规则"},model:{value:t.temp.join.total,callback:function(e){t.temp.join.total=e},expression:"temp.join.total"}})],1)]),t._v(" "),a("el-form-item",{attrs:{label:"每人每天次数","label-width":"150px"}},[a("div",{staticClass:"w50"},[a("el-input",{attrs:{placeholder:"请输入活动规则"},model:{value:t.temp.join.day,callback:function(e){t.temp.join.day=e},expression:"temp.join.day"}})],1)]),t._v(" "),a("el-form-item",{attrs:{label:"每人每天中奖次数","label-width":"150px"}},[a("div",{staticClass:"w50"},[a("el-input",{attrs:{placeholder:"请输入活动规则"},model:{value:t.temp.join.dayBingo,callback:function(e){t.temp.join.dayBingo=e},expression:"temp.join.dayBingo"}})],1)]),t._v(" "),a("el-form-item",{attrs:{label:"中奖时间间隔","label-width":"150px"}},[a("div",{staticClass:"w50"},[a("el-input",{attrs:{placeholder:"请输入活动规则"},model:{value:t.temp.join.bingoTime,callback:function(e){t.temp.join.bingoTime=e},expression:"temp.join.bingoTime"}})],1)]),t._v(" "),a("el-form-item",{attrs:{label:"参与频率","label-width":"150px"}},[a("div",{staticClass:"w50"},[a("el-input",{attrs:{placeholder:"请输入活动规则"},model:{value:t.temp.join.rate,callback:function(e){t.temp.join.rate=e},expression:"temp.join.rate"}})],1)])],1),t._v(" "),a("el-tab-pane",{attrs:{label:"高级设置"}},[a("hongbao",{ref:"hongbao",on:{getHongbaoData:t.getHongbaoData}})],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.create}},[t._v("提交")]):a("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v("保存")])],1)],1)],1)},staticRenderFns:[]}}});