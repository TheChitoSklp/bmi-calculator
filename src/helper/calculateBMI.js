export function calcularBMI_Metrico(weight, heigth) {
  let bmi = weight / Math.pow(heigth, 2);
  return (bmi * 10000).toFixed(1);
}
export function calcularBMI_Imperial(weightSt, weightLbs, heightFt, heightIn) {
  let weightEnLibras = weightSt * 14 + weightLbs;
  let heightEnPulgadas = heightFt * 12 + heightIn;

  let bmi = (weightEnLibras / Math.pow(heightEnPulgadas, 2)) * 703;
  return bmi;
}
