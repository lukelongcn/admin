webpackJsonp([16],{274:function(t,e,a){var n=a(7)(a(318),a(382),null,null,null);t.exports=n.exports},292:function(t,e,a){"use strict";function n(t){return/^1[3|4|5|8][0-9]\d{4,8}$/.test(t)}e.a=n},293:function(t,e,a){"use strict";function n(t,e){return a.i(p.a)({url:t,method:"get",params:e})}function i(t){return a.i(p.a)({url:"/community/banner_type",method:"POST",data:t})}function l(t){return a.i(p.a)({url:"/community/banner_type/status/"+t,method:"put"})}function r(t){return a.i(p.a)({url:"/community/banner_type",method:"put",data:t})}function s(t){return a.i(p.a)({url:"/community/banner",method:"POST",data:t})}function o(t){return a.i(p.a)({url:"/community/banner",method:"put",data:t})}function u(t){return a.i(p.a)({url:"/community/banner/"+t,method:"delete"})}function c(t){return a.i(p.a)({url:"/community/goods",method:"POST",data:t})}function d(t){return a.i(p.a)({url:"/community/goods",method:"put",data:t})}function m(t){return a.i(p.a)({url:"/community/goods/"+t+"/status",method:"put"})}e.a=n,e.b=i,e.j=l,e.c=r,e.h=s,e.i=o,e.g=u,e.e=c,e.f=d,e.d=m;var p=a(108)},318:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(293);a(292);e.default={data:function(){return{enable:"1",dateRange:null,temp:{enable:"1",name:null,id:null},tableData:null,total:null,dialogFormVisible:!1,dialogStatus:"",rules:{name:[{required:!0,message:"请输入分类名称",trigger:"blur"}],code:[{required:!0,message:"请输入标识",trigger:"blur"}]},listQuery:{pageNumber:1,pageSize:20},textMap:{update:"编辑",create:"新增"}}},created:function(){this.getTableData()},methods:{goList:function(t){this.$router.push({path:"/community/fnlist",query:{id:t}})},dateRangeChange:function(){this.temp.startTime=new Date(this.dateRange[0]).getTime(),this.temp.endTime=new Date(this.dateRange[1]).getTime()},getTableData:function(){var t=this;a.i(n.a)("/community/banner_type/page",this.listQuery).then(function(e){if(0===e.code){var a=e.data;t.total=a.total,t.tableData=a.data}})},handleCreate:function(){this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0},handleUpdate:function(t){this.dateRange=[],this.dateRange.push(new Date(t.startTime)),this.dateRange.push(new Date(t.endTime)),this.enable=t.enable.toString(),this.temp=t,this.dialogStatus="update",this.dialogFormVisible=!0},resetTemp:function(){this.enable="1",this.temp={name:null,enable:"1",id:null}},create:function(){var t=this;if(this.resetTemp(),this.temp.id=0,this.temp.enable=this.enable,!this.temp.startTime||!this.temp.endTime)return void this.$message.error("请选择时间范围");this.$refs.temp.validate(function(e){e&&a.i(n.b)(t.temp).then(function(e){0===e.code&&(t.getTableData(),t.dialogFormVisible=!1,t.$message.success("创建成功"))})})},update:function(){var t=this;if(this.temp.enable=this.enable,!this.temp.startTime||!this.temp.endTime)return void this.$message.error("请选择时间范围");a.i(n.c)(this.temp).then(function(e){0===e.code&&(t.getTableData(),t.dialogFormVisible=!1,t.$message.success("保存成功"))})}}}},382:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"edit"},on:{click:t.handleCreate}},[t._v("新增\n    ")]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"edit"},on:{click:t.goList}},[t._v("去列表")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"ID",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"分类名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"数量"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.bannerCount))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"开始时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("formatDateTime")(e.row.startTime)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"结束时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("formatDateTime")(e.row.endTime)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("formatDateTime")(e.row.createTime)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"标示码",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.code))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(0===e.row.enable?"禁用":"启用"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"btn btn-sm btn-info",attrs:{size:"small",type:"info"},on:{click:function(a){t.handleUpdate(e.row)}}},[t._v("编辑\n        ")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"success"},on:{click:function(a){t.goList(e.row.id)}}},[t._v("列表\n        ")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"warning"},on:{click:function(a){t.handleModifyStatus(e.row.id)}}},[t._v("禁用\n        ")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":t.listQuery.pageNumber,"page-size":t.listQuery.pageSize,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.getTableData,"update:currentPage":function(e){t.listQuery.pageNumber=e}}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,size:"full"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"temp",attrs:{model:t.temp,rules:t.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"分类名称",prop:"name"}},[a("el-input",{model:{value:t.temp.name,callback:function(e){t.temp.name=e},expression:"temp.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"标识",prop:"code"}},[a("el-input",{model:{value:t.temp.code,callback:function(e){t.temp.code=e},expression:"temp.code"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"上线时间"}},[a("el-date-picker",{attrs:{type:"daterange",placeholder:"选择日期范围"},on:{change:t.dateRangeChange},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("div",{staticClass:"checkitem"},[a("el-radio",{staticClass:"radio",attrs:{label:"1"},model:{value:t.enable,callback:function(e){t.enable=e},expression:"enable"}},[t._v("启用")]),t._v(" "),a("el-radio",{staticClass:"radio",attrs:{label:"0"},model:{value:t.enable,callback:function(e){t.enable=e},expression:"enable"}},[t._v("禁用")])],1)])],1),t._v(" "),a("div",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.create}},[t._v("提交")]):a("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]}}});