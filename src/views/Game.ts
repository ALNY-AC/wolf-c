export default class Game {

    /**
     * 
     * @param maxCount 最大循环的次数
     * @param callback 每次循环的回调
     */
    timer(callback: Function, maxCount: number = 1, time: number = 1000): Promise<null> {
        return new Promise(function (resolve, reject) {
            let counting = 1;
            let count: number = maxCount;
            callback(counting, count);
            let interval = setInterval(() => {

                if (count <= 1) {
                    resolve();
                    clearInterval(interval);
                    return;
                }

                counting++;
                count--;
                callback(counting, count);

            }, time)
        });
    }
    getRoleIcon(role: number) {
        if (role == 1) {
            return "🐺";
        }
        if (role == 2) {
            return "🧙‍♀️";
        }
        if (role == 3) {
            return "🧙‍♂️";
        }
    }
}