const debounce = <T extends (...args:any[]) => void>(fn: T, delay: number) => {
    let timer: number;
    return (...args: Parameters<T>) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    }
};

export default debounce;
