
/**
 * Chrome拡張でのURLを取得
 * @param assetsPath assetsの相対パス
 */
function getUrl(assetsPath: string) {
    return chrome.extension.getURL(assetsPath);
}

/**
 * ローカルストレージにオブジェクトを保存
 * @param obj ローカルストレージに保存するオブジェクト
 */
function setLocalStrage(obj: object) {
    return new Promise((resolve) => {
        chrome.storage.sync.set(obj, () => {
            resolve();
        });
    });
}

/**
 * ローカルストレージからオブジェクトを取得
 * @param key ローカルストレージを取得するkey
 */
function getLocalStrage(key: string) {
    return new Promise((resolve) => {
        chrome.storage.sync.get(key, (item) => {
            // eslint-disable-next-line
            key ? resolve(item[key]) : resolve(item);
        });
    });
}

export {
    getUrl,
    setLocalStrage,
    getLocalStrage,
};
