
export function sortingByWord(a: any, b: any) {
    var aword = a.dua_name_en
    var bword = b.dua_name_en
    return aword == bword ? 0 : (aword < bword ? -1 : 1);
}