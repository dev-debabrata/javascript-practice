const hasDriversLicense = true;   // A
const hasGoodVision = true;   // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

console.log(!hasDriversLicense);
if(hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to Drive!');
} else {
    console.log('Someone else should drive...');
}


const isTried = false;   // C

console.log(hasDriversLicense && hasGoodVision && isTried);
if(hasDriversLicense && hasGoodVision && isTried) {
    console.log('Sarah is able to Drive!');
} else {
    console.log('Someone else should drive...');
}
