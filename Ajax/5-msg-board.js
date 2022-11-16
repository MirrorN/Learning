function getComment(){
    $.ajax({
        method: 'GET',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        data: {},
        success: function(res){
            if(res.status !== 200){
                // 注意 return 的写法
                return alert('评论获取失败');
            }
            var rows = [];
            $.each(res.data, function(i, item){
                rows.push('<li class="list-group-item">'+item.content+
                '<span class="badge" style="background-color:#F0AD4E">评论时间:'+item.time+
                '</span><span class="badge" style="background-color:#5bc0de">评论人:'+item.username+
                '</span></li>');
            });
            $('#cmt-list').empty().append(rows.join(''));
        },
    });
}


$(function(){
    getComment();
    $('#formAddCmt').on('submit', function(e){
        // 阻止表单默认提交
        e.preventDefault();
        var data = $(this).serialize();
        // 提交数据
        $.ajax({
            method: 'POST',
            url: 'http://www.liulongbin.top:3006/api/addcmt',
            data: data,
            success: function(res){
                // 提交失败
                if(res.status != 201){
                        
                }
                // 提交成功 刷新评论页面
                getComment();
                // 使用reset方法可以快速清空form表单
                // jq并没有这个方法 因此要先将 jq 得到的结果转化为 dom 对象再使用
                $('#formAddCmt')[0].reset();
            }
        });
    });
})