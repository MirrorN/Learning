template.defaults.imports.filterTag = function (value) {
    return value.split(',');
}

function numFormat(num) {
    return num < 10 ? '0' + num : num;
}

template.defaults.imports.filterTime = function (value) {
    var value = new Date(value);
    var y = value.getFullYear();
    var m = value.getMonth() + 1;
    var d = value.getDate();
    var h = value.getHours();
    var min = value.getMinutes();
    var s = value.getSeconds();
    return y + '-' + numFormat(m) + '-' + numFormat(d) + '  ' + numFormat(h) + ':' + numFormat(min) + ':' + numFormat(s);
}

function getNews() {
    $.ajax({
        method: 'GET',
        url: 'http://www.liulongbin.top:3006/api/news',
        success: function (res) {
            if (res.status !== 200) {
                return alert('新闻获取失败');
            }
            $.each(res.data, function(i, item){
                item.tags = item.tags.split(',');
            }); 
            var htmlStr = template('news-tpl', res);
            // console.log(htmlStr);
            $('#news-list').html(htmlStr);
        }
    })
}
$(function () {
    getNews();
})