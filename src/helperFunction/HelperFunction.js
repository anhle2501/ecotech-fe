
export const hasPermission = (permission = null, localStoragePermission = []) => {
    try {
        return localStoragePermission.contains(permission) && permission != null
    } catch (err) {
        console.log(err);
    } 
}