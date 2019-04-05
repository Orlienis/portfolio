export default class Validator{
    static isEmpty(data){
        return data.length == 0 || data == null;
    }
}