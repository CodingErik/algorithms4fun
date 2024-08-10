/**
 * Duplicate Integers
 * 
 * Given an integer array nums, return true if any value appears at 
 * least twice in the array, and return false if every element is distinct.
 * 
 * [1,2,3,1]
 */

// const test1: number[] = [1,1,1,3,3,4,3,2,4,2] /// true
// const test2: number[] = [1,2,3,4] // false 
// const test3: number[] = [1,2,3,1] // true 

function containsDuplicate(nums: number[]): boolean {
    const hashTable: { [key: number]: Boolean } = {};

    for (let i = 0; i < nums.length; i++) {

        if (hashTable[nums[i]]) return true;

        hashTable[nums[i]] = true;
    }

    return false;
};

// console.log(containsDuplicate(test1));
// console.log(containsDuplicate(test2));
// console.log(containsDuplicate(test3));


/**
 * Is Anagram
 * 
 * Given two strings s and t, return true if the two strings 
 * are anagrams of each other, otherwise return false.
 * 
 * An anagram is a string that contains the exact same characters 
 * as another string, but the order of the characters can be different.
 * 
 * racecar     carrace 
 * jar     jam
 * 
 */

// expected output: true
let str1: string = "anagram"
let str2: string = "nagaram"
// expected output: true
let str3: string = "racecar"
let str4: string = "carrace"
// expected output: false
let str5: string = "jar"
let str6: string = "jam"

let str7: string = "a"
let str8: string = "ab"

function isAnagram(str1: string, str2: string): boolean {

    // edge case 
    if (str1.length !== str2.length) return false;

    const hashTable: { [key: string]: number } = {};
    const hashTable2: { [key: string]: number } = {};

    // add letter to hashTable and adding the count for that letter
    for (let i = 0; i < str1.length; i++) {
        if (hashTable[str1[i]]) {
            hashTable[str1[i]]++;
        } else {
            hashTable[str1[i]] = 1;
        }
    }
    for (let i = 0; i < str2.length; i++) {
        if (hashTable2[str2[i]]) {
            hashTable2[str2[i]]++;
        } else {
            hashTable2[str2[i]] = 1;
        }
    }

    // compare letters and counts between each hashTable
    for (const [key, value] of Object.entries(hashTable)) {
        if (hashTable2[key] !== value) {
            return false;
        }
    }

    return true;
}

// console.log(isAnagram(str1, str2))
// console.log(isAnagram(str3, str4))
// console.log(isAnagram(str5, str6))
// console.log(isAnagram(str7, str8))

/**
 *  Two Sum 
 * 
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, 
 * and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 */


function twoSum(arr: number[], target: number): number[] {
    const hashTable: { [key: number]: number } = {};

    // putting the numbers in the hashTable and mark down the position
    for (let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i];
        const numberWeNeed = target - currentNumber;

        if (numberWeNeed in hashTable) {
            return [hashTable[numberWeNeed], i];
        }

        hashTable[currentNumber] = i;
    }

    return [];
}


const arr: number[] = [3, 2, 4]
const target: number = 6

// [0,1]
const arr2: number[] = [3, 3]
const target2: number = 6



// console.log(twoSum(arr, target), `these 2 position add up to the ${target}`)
// console.log(twoSum(arr2, target2), `these 2 position add up to the ${target2}`)



/**
 * 
 * Top K Elements in List
 * Given an integer array nums and an integer k, return the k most frequent elements within the array.
 * The test cases are generated such that the answer is always unique.
 * 
 * You may return the output in any order.
 * 
 * Input: nums = 1,[1,2,2,3,3,3], k = 2
 * 
 * Output: [2,3]
 * 
 * Example:
 * If nums = [1,1,1,2,2,3] and k = 2, the result would be [1, 2]
 * because 1 appears 3 times and 2 appears 2 times.
 * Is that clear
 * 
 * 
 * Input: nums = [7,7], k = 1
 * Output: [7]
 * 
 */

const nums = [1,1,2,2,2,3]
let k = 2; 


function topKFrequent(numbArr: number[], k:number): number[] {
    const hashTable: { [key: number]: number } = {};

    for (let i = 0; i < numbArr.length; i++) {
        
        if(numbArr[i] in hashTable){
            // seeing one more repetition of the number 
            hashTable[numbArr[i]] = hashTable[numbArr[i]] + 1; 
        } else {
            hashTable[numbArr[i]] = 1; 
        }
    }

    const sortedEntries: [string, number][] = Object.entries(hashTable).sort((a, b) => b[1] - a[1]);
   
    const answerArr: number[] = []; 

    for (let i = 0; i < k; i++) {
        answerArr.push(Number(sortedEntries[i][0])); 
    }

 return answerArr   
}

// console.log(topKFrequent(nums, k))


// Runtime
// 64
// ms
// Beats
// 86.93%
// Analyze Complexity
// Memory
// 53.06
// MB
// Beats
// 90.46%


const arrNums: number[] =  [100,4,200,1,3,2] ///[2,20,4,10,3,4,5,21,22]

function longestConsecutive(arr:number[]) {

    const numSet = new Set(arr);
    let longestConsecutiveSequence = 1;
    let determineTheStart; 

    for (let i = 0; i < arr.length; i++) {
        if (!numSet.has(arr[i]-1)){
            let currentConsecutiveSeq = 1;
            determineTheStart = arr[i]
            let counter = 1; // 1     //
            //  okay track how long the sequence goes 
            while(numSet.has(determineTheStart + counter)){             
                counter++; // check the set for the number if it's in the sequence  
                currentConsecutiveSeq++;           
            }
            if(currentConsecutiveSeq > longestConsecutiveSequence) {
                longestConsecutiveSequence = currentConsecutiveSeq
            }
        }
        continue;  
    }
    return longestConsecutiveSequence; 
}


console.log(longestConsecutive(arrNums))

































/**
 * 
 * 
 * Given n non-negative integers representing an elevation map where the width of each 
 * bar is 1, compute how much water it can trap after raining.
 * Example 1:
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The above elevation map (black section) is represented 
 * by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
 * In this case, 6 units of rain water (blue section) are being trapped.
 * 
 *           
 * height = [0,1,0,2,1,0,1,3,2,1,2,1]
 *           ^                     ^
 * Output: 6
 */

const height = [0,1,0,2,1,0,1,3,2,1,2,1]


function trap(height: number[]): number {
    let leftPointer = 0;
    let rightPointer = height.length - 1;
    // accumulate left water
    let leftWaterSum = 0
    let rightWaterSum = 0;
    let leftMax = 0
    let rightMax = 0;

    while (leftPointer < rightPointer) {

        let currentLeftColumn = height[leftPointer]
        let currentRightColumn = height[rightPointer]

        if (currentLeftColumn < currentRightColumn) {
            if (currentLeftColumn > leftMax) {
                leftMax = currentLeftColumn;
            } else {
                leftWaterSum += leftMax - currentLeftColumn;
            }
            leftPointer++;
        } else {
            if (currentRightColumn > rightMax) {
                rightMax = currentRightColumn;
            } else {
                rightWaterSum += rightMax - currentRightColumn;
            }
            rightPointer--;
        }
    }

    return leftWaterSum + rightWaterSum
};

// console.log(trap(height))