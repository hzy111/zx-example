/*
 * @Author: your name
 * @Date: 2020-07-02 20:24:29
 * @LastEditTime: 2020-07-02 20:25:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Example\apis\common.js
 */ 
async function get(params){
    try {
        let result = await window.mgWeb.GetResult(params);
        if(result.IsOk){
            console.log(result.Data)
            return result.Data
        }else{
            return null
        }
    }catch(err){
        return null
    }
}

async function get(params){
    try {
        let result = await window.mgWeb.Post(params);
        if(result.IsOk){
            console.log(result.Data)
            return result.Data
        }else{
            return null
        }
    }catch(err){
        return null
    }
}
