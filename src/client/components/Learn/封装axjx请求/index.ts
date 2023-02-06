export const request = (option: any) => {
    const xhr = new XMLHttpRequest()

    //初始化参数
    option = option || {}
    option.type = (option.type || 'GET').toUpperCase()
    option.dataType = option.dataType || 'json'
    const params = option.data
    if(option.type == 'GET'){
        xhr.open(option.type, option.url + '?' + params, true)
        xhr.send(null)
    }else if(option.type == 'POST'){
        xhr.open(option.type, option.url, true)
        xhr.send(params)
    }

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status <= 300){
                console.log(xhr.responseText)
                option.success && option.success(xhr.responseText, xhr.responseXML)
            }else {
                console.log('请求出错', xhr.status)
                option.fail && option.fail(xhr.status)
            }
        }
    }
}