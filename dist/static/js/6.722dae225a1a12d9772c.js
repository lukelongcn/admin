webpackJsonp([6],{271:function(t,e,a){function n(t){a(348)}var l=a(7)(a(315),a(370),n,null,null);t.exports=l.exports},293:function(t,e,a){"use strict";function n(t,e){return a.i(p.a)({url:t,method:"get",params:e})}function l(t){return a.i(p.a)({url:"/community/banner_type",method:"POST",data:t})}function s(t){return a.i(p.a)({url:"/community/banner_type/status/"+t,method:"put"})}function i(t){return a.i(p.a)({url:"/community/banner_type",method:"put",data:t})}function o(t){return a.i(p.a)({url:"/community/banner",method:"POST",data:t})}function r(t){return a.i(p.a)({url:"/community/banner",method:"put",data:t})}function u(t){return a.i(p.a)({url:"/community/banner/"+t,method:"delete"})}function c(t){return a.i(p.a)({url:"/community/goods",method:"POST",data:t})}function m(t){return a.i(p.a)({url:"/community/goods",method:"put",data:t})}function d(t){return a.i(p.a)({url:"/community/goods/"+t+"/status",method:"put"})}e.a=n,e.b=l,e.j=s,e.c=i,e.h=o,e.i=r,e.g=u,e.e=c,e.f=m,e.d=d;var p=a(108)},315:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(293);e.default={data:function(){return{select:[{label:"手机卡",val:1},{label:"滴滴卡",val:2},{label:"实物",val:3},{label:"V币",val:4}],dateRange:null,temp:{img:null,name:null,description:null,goodsTypeId:1,id:null,price:null,realPrice:null,status:1,stock:null,vCoinsRate:null},tableData:null,total:null,dialogFormVisible:!1,dialogStatus:"",rules:{title:[{required:!0,message:"请输入分类名称",trigger:"blur"}],fontColor:[{required:!0,message:"请输入颜色",trigger:"blur"}]},listQuery:{pageNumber:1,pageSize:20},textMap:{update:"编辑",create:"新增"}}},created:function(){this.getTableData()},methods:{changeStatus:function(t,e){var l=this,s=0===e?"下架":"上架";this.$confirm("是否"+s+"此商品?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.i(n.d)(t).then(function(t){0===t.code&&(l.$message({type:"success",message:s+"成功!"}),l.getTableData())})})},beforeHandleImg:function(t){var e="image/jpeg"===t.type||"image/jpg"===t.type||"image/png"===t.type;return e||this.$message.error("上传头像图片必须是 JPG,JPEG,PNG 格式!"),e},handleImgSuccess:function(t,e){0===t.code?(this.$message.success("上传头像成功"),this.temp.img=t.data,console.log(t.data)):this.$message.error("上传失败，请重试")},handleDele:function(t){var e=this;this.$confirm("此操作将永久删除该条, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){delFunction(t).then(function(t){0===t.code&&(e.$message({type:"success",message:"删除成功!"}),e.getTableData())})})},dateRangeChange:function(){this.temp.startTime=new Date(this.dateRange[0]).getTime(),this.temp.endTime=new Date(this.dateRange[1]).getTime()},getTableData:function(){var t=this;a.i(n.a)("/community/goods/page",this.listQuery).then(function(e){if(0===e.code){var a=e.data;t.total=a.total,t.tableData=a.data}})},handleCreate:function(){this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0},handleUpdate:function(t){this.dateRange=[],this.dateRange.push(new Date(t.startTime)),this.dateRange.push(new Date(t.endTime)),console.log(t),t.goodsTypeId=t.goodsType.id,this.temp=t,this.dialogStatus="update",this.dialogFormVisible=!0},resetTemp:function(){this.dateRange=[],this.temp={img:null,name:null,description:null,goodsTypeId:1,id:null,price:null,realPrice:null,status:1,stock:null,vCoinsRate:null}},create:function(){var t=this;if(!this.temp.startTime||!this.temp.endTime)return void this.$message.error("请选择时间范围");a.i(n.e)(this.temp).then(function(e){0===e.code&&(t.getTableData(),t.dialogFormVisible=!1,t.$message.success("创建成功"))})},update:function(){var t=this;if(!this.temp.startTime||!this.temp.endTime)return void this.$message.error("请选择时间范围");a.i(n.f)(this.temp).then(function(e){0===e.code&&(t.getTableData(),t.dialogFormVisible=!1,t.$message.success("保存成功"))})}}}},338:function(t,e,a){e=t.exports=a(254)(!1),e.push([t.i,"",""])},348:function(t,e,a){var n=a(338);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(255)("7950bf82",n,!0)},370:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"edit"},on:{click:t.handleCreate}},[t._v("新增\n    ")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"ID",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"商品名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"商品编码"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.code))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"商品类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.goodsType.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"商品价格"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.price))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"库存"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.stock))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"开始时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("formatDateTime")(e.row.startTime)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"结束时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("formatDateTime")(e.row.endTime)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"商品状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(0===e.row.status?"下架":"上架"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"btn btn-sm btn-info",attrs:{size:"small",type:"info"},on:{click:function(a){t.handleUpdate(e.row)}}},[t._v("编辑\n        ")]),t._v(" "),0===e.row.status?a("el-button",{attrs:{size:"small",type:"success"},on:{click:function(a){t.changeStatus(e.row.id,1)}}},[t._v("上架\n        ")]):a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.changeStatus(e.row.id,0)}}},[t._v("下架\n        ")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":t.listQuery.pageNumber,"page-size":t.listQuery.pageSize,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.getTableData,"update:currentPage":function(e){t.listQuery.pageNumber=e}}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,size:"full"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"temp",staticClass:"form30",attrs:{model:t.temp,rules:t.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{staticClass:"w30",model:{value:t.temp.name,callback:function(e){t.temp.name=e},expression:"temp.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{attrs:{placeholder:"活动区域"},model:{value:t.temp.goodsTypeId,callback:function(e){t.temp.goodsTypeId=e},expression:"temp.goodsTypeId"}},t._l(t.select,function(t){return a("el-option",{attrs:{label:t.label,value:t.val}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"图标"}},[a("el-upload",{attrs:{action:t.IMGUP_API,"show-file-list":!1,"on-success":t.handleImgSuccess,"list-type":"picture-card","before-upload":t.beforeHandleImg}},[t.temp.img?a("img",{staticClass:"avatar",attrs:{src:t.temp.img,width:"148",height:"148"}}):a("i",{staticClass:"avatar-uploader-icon el-icon-plus"})])],1),t._v(" "),a("el-form-item",{attrs:{label:"原价"}},[a("el-input",{staticClass:"w30",model:{value:t.temp.realPrice,callback:function(e){t.temp.realPrice=e},expression:"temp.realPrice"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"价格"}},[a("el-input",{staticClass:"w30",model:{value:t.temp.price,callback:function(e){t.temp.price=e},expression:"temp.price"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"V币兑换"}},[a("el-input",{staticClass:"w30",model:{value:t.temp.vCoinsRate,callback:function(e){t.temp.vCoinsRate=e},expression:"temp.vCoinsRate"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"内容"}},[a("el-input",{staticClass:"w30",attrs:{type:"textarea"},model:{value:t.temp.description,callback:function(e){t.temp.description=e},expression:"temp.description"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"上架时间"}},[a("el-date-picker",{attrs:{type:"daterange",placeholder:"选择日期范围"},on:{change:t.dateRangeChange},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"库存"}},[a("el-input",{staticClass:"w30",model:{value:t.temp.stock,callback:function(e){t.temp.stock=e},expression:"temp.stock"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("div",{staticClass:"checkitem"},[a("el-radio",{staticClass:"radio",attrs:{label:1},model:{value:t.temp.status,callback:function(e){t.temp.status=e},expression:"temp.status"}},[t._v("上架")]),t._v(" "),a("el-radio",{staticClass:"radio",attrs:{label:0},model:{value:t.temp.status,callback:function(e){t.temp.status=e},expression:"temp.status"}},[t._v("下架")])],1)])],1),t._v(" "),a("div",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.create}},[t._v("提交")]):a("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v("保存")])],1)],1)],1)},staticRenderFns:[]}}});