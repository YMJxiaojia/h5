(function(){
        var ajaxing = false;//是否正在加载
        var num = 0;//计数器
        //在zepto的 $.fn上扩展插件 可以在各种DOM节点下调用此下拉加载方法
        $.extend($.fn,{
            pulldown : function  (options) { //参数为请求的url 开始条数和结束的条数 *如果只传一个则代表每次请求的条数* wrapper 是渲染的外层
                var self = this;

                var optionsDefault = {
                    url : "",
                    start : "",
                    wrapper : "",
                    number : "",
                    callback : function() {

                    }
                }
                $.extend(optionsDefault,options);
                $(window).on("scroll",function() {
                    if(( document.body.scrollTop + self.height() > $(document).height()-40) && !ajaxing) {
                        //滚动条拉到离底40像素内，而且没ajax中
                         $(optionsDefault.wrapper).append('<div class="loading-more"></div> ');//出现加载中

                        var data = {
                            start : optionsDefault.start+optionsDefault.number*num,
                            end : optionsDefault.number
                        }
                        $.ajax({
                            type: 'POST',
                            url: optionsDefault.url,
                            data : data,
                            dataType: 'json',
                            beforeSend : function(){
                                ajaxing = true;//注明开始ajax加载中
                            },
                            success: function(json){
                                //调用回调函数
                                optionsDefault.callback(json);
                                ajaxing = false;//已经完成ajax加载
                                num++;//当前计数器自增
                                //销毁加载状态
                                 $(optionsDefault.wrapper).find(".loading-more").remove();
                            },
                            error: function(xhr, type){
                                $(optionsDefault.wrapper).find(".loading-more").addClass('loading-noBg').html("加载失败！");
                            }

                        })
                    }
                })
            }
        })
}());