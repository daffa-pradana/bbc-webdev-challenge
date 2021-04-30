// generate paragraphs
export const generateParagraph = ( data ) => {
    let p = []
    if (!data) return p
    for( let i = 1; i <= 100; i++) {
        let obj_prop = "p_" + i + "_value" 
        if (!data.hasOwnProperty(obj_prop)) break;
        p.push(data[obj_prop]) 
    }
    return p
}