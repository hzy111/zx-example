/**
 * 获取工点单元信息
 * @param {String} id 工点id
 */
async function getBuilding(id) {
    let params = {
        apiPath: "v1/p/core/building/info",
        urlParam: {
            Id: id
        }
    };
    let result = await window.mgWeb.GetResult(params);
    if(result && result.IsOk) {
        return result.Data;
    }
    else {
        vant.Notify("获取模型单元信息失败");
        return null;
    }
}

/**
 * 获取模型单元列表
 * @param {Number} type 模型单元类别
 */
async function getBuildings(type) {
    let params = {
        apiPath: "v1/p/core/building/list_for_user",
        urlParam: {
            ProjectId: await window.mgContext.GetProjectId(),
            ListParams: {}
        }
    };
    if(type > 0 && type < 3) {
        params.urlParam.ListParams.Search = "Type == " + type;
    }

    let result = await window.mgWeb.GetResult(params);
    if(result && result.IsOk) {
        return result.Data;
    }
    else {
        vant.Notify("获取模型单元列表失败");
        return [];
    }
}

let buildingService = {
    getBuilding,
    getBuildings
};