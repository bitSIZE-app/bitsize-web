export function classNames (classes: Array<any>):string {
    return classes.map(item => typeof item === 'string' ? item : '').filter(item => item.length > 0).join( ' ');
}

export function capitalizeWords(str: string):string {
    return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
}

export function getInitials(name: string):string {
    return name.split(' ').map(n => n.split('')[0]).join('').toUpperCase();
}