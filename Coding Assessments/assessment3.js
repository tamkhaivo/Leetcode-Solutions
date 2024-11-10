/*
    Assessment 2024: 55 62 65 72
*/
/*
module.exports = {
    maxValueXOR: maxValueXOR,
    optimizedMaxValueXOR: optimizedMaxValueXOR,
    binary32BitMaxValueXOR: binary32BitMaxValueXOR
};

*/



/*

    Given an Int array. Consider the elements in PAIRs (arr[0], arr[1])
    arrange each pair in ascending order. 
    
    arr = [1, 5, 7, 3, 2, 1]
    solution = [1, 5, 3, 7, 1, 2]

*/




/*

    Given an string `message` and an Integer `n`, 
    Replace every nth consonent with the next consonent from the aphabet while keeping the case consistent;
        
    b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z, 

    z goes to b;


    message = CodeSignal n = 3
    solution = CodeTignam


*/



/*

    Imagine you were formatting text that will appear on a newsletter page.
    Given a paragraphs is an array of paragraphs, where each paragraph has chunks of text.
    Widths represents the maximum number of characters that can fit on each line of the newspaper page. 

    - For each paragraph start a new line.
    - When portions of text is togeter on a line, they are seperated by 1 space
    - you cannot break up portions of text, you have to start a new line with the entire word.
    - You may end up with left over space on a line.. 
         if even equal number of spaces before and after
         if odd add the extra space after the text
    - There will be an * character border around the output.

  
    paragraphs = [["hello", "world"], ["How", "areYou", "doing"], ["Please look", "and align", "to center"]]
    width = 16

    solution = ["******************",
                 *  hello world   *"
                 *How areYou Doing*"
                 *  Please look   *"
                 *   and align    *"
                 *    to center   *"
                "******************"]

*/




/*

    You are monitoring the building density in a district of houses. 
    The district is represented as a number line, where a house can be built at a numbered point on the line if
    If at least 1 of the neighboring points is not occupied.

    Given queries, an array of Int represnting locations of new homes in order in wich they will be built
    after each house is built, your task is to find the longest segment of contiguous houses in a disctict

    return an array of inters represetngint the longset segment of contigous houes from queresi is built.

    queries [1,3,0,4]
    solution = [1,1,2,2]


    [0, 0, 0, 0, 0]
    [0, 1, 0, 0, 0] output: [1]
    [0, 1, 0, 1, 0] output: [1,1]
    [1, 1, 0, 1, 0] output: [1,1,2]
    [1, 1, 0, 1, 1] output: [1,1,2,2]
*/