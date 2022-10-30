export function classNames (classes: Array<any>):string {
    return classes.map(item => typeof item === 'string' ? item : '').filter(item => item.length > 0).join( ' ');
}