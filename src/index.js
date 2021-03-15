module.exports = function toReadable(number) {
    let zero = "zero",
        one = "one",
        two = "two",
        three = "three",
        four = "four",
        five = "five",
        six = "six",
        seven = "seven",
        eight = "eight",
        nine = "nine",
        ten = "ten",
        eleven = "eleven",
        twelve = "twelve";
    let addLastNumber = (num, dozen) => {
        switch (num) {
            case 0:
                return `${dozen}`.trim();
            case 1:
                return `${dozen} ${one}`.trim();
            case 2:
                return `${dozen} ${two}`.trim();
            case 3:
                return `${dozen} ${three}`.trim();
            case 4:
                return `${dozen} ${four}`.trim();
            case 5:
                return `${dozen} ${five}`.trim();
            case 6:
                return `${dozen} ${six}`.trim();
            case 7:
                return `${dozen} ${seven}`.trim();
            case 8:
                return `${dozen} ${eight}`.trim();
            case 9:
                return `${dozen} ${nine}`.trim();
        }
    };
    let addTenNumber = (lastNumber, check) => {
        switch (check) {
            case 0:
                return addLastNumber(lastNumber, "");
            case 1:
                switch (lastNumber) {
                    case 0:
                        return ten.trim();
                    case 1:
                        return eleven.trim();
                    case 2:
                        return twelve.trim();
                    case 3:
                        return `thirteen`.trim();
                    case 4:
                        return `${four}teen`.trim();
                    case 5:
                        return `fifteen`.trim();
                    case 6:
                        return `${six}teen`.trim();
                    case 7:
                        return `${seven}teen`.trim();
                    case 8:
                        return `${eight}een`.trim();
                    case 9:
                        return `${nine}teen`.trim();
                }
                break;
            case 2:
                return addLastNumber(lastNumber, "twenty");
            case 3:
                return addLastNumber(lastNumber, "thirty");
            case 4:
                return addLastNumber(lastNumber, "forty");
            case 5:
                return addLastNumber(lastNumber, "fifty");
            case 6:
                return addLastNumber(lastNumber, "sixty");
            case 7:
                return addLastNumber(lastNumber, "seventy");
            case 8:
                return addLastNumber(lastNumber, "eighty");
            case 9:
                return addLastNumber(lastNumber, "ninety");
        }
    };
    let addHundredNumber = (HundredNumber, tenNumber, lastNumbers) => {
        switch (HundredNumber) {
            case 1:
                return `${one} hundred ${addTenNumber(
                    lastNumbers,
                    tenNumber
                )}`.trim();
            case 2:
                return `${two} hundred ${addTenNumber(
                    lastNumbers,
                    tenNumber
                )}`.trim();
            case 3:
                return `${three} hundred ${addTenNumber(
                    lastNumbers,
                    tenNumber
                )}`.trim();
            case 4:
                return `${four} hundred ${addTenNumber(
                    lastNumbers,
                    tenNumber
                )}`.trim();
            case 5:
                return `${five} hundred ${addTenNumber(
                    lastNumbers,
                    tenNumber
                )}`.trim();
            case 6:
                return `${six} hundred ${addTenNumber(
                    lastNumbers,
                    tenNumber
                )}`.trim();
            case 7:
                return `${seven} hundred ${addTenNumber(
                    lastNumbers,
                    tenNumber
                )}`.trim();
            case 8:
                return `${eight} hundred ${addTenNumber(
                    lastNumbers,
                    tenNumber
                )}`.trim();
            case 9:
                return `${nine} hundred ${addTenNumber(
                    lastNumbers,
                    tenNumber
                )}`.trim();
        }
    };
    if (number < 13) {
        switch (number) {
            case 0:
                return `${zero}`.trim();
            case 1:
                return `${one}`.trim();
            case 2:
                return `${two}`.trim();
            case 3:
                return `${three}`.trim();
            case 4:
                return `${four}`.trim();
            case 5:
                return `${five}`.trim();
            case 6:
                return `${six}`.trim();
            case 7:
                return `${seven}`.trim();
            case 8:
                return `${eight}`.trim();
            case 9:
                return `${nine}`.trim();
            case 10:
                return `${ten}`.trim();
            case 11:
                return `${eleven}`.trim();
            case 12:
                return `${twelve}`.trim();
        }
    } else {
        let check = Math.floor(number / 10);
        if (check < 10) {
            let tenNum = number % 10;
            return addTenNumber(tenNum, check);
        } else {
            let lastNum = number % 10;
            let tenNum = Math.floor((number % 100) / 10);
            let HundredNum = Math.floor(number / 100);
            console.log;
            return addHundredNumber(HundredNum, tenNum, lastNum);
        }
    }
};
