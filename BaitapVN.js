//bai1:Tính tổng các phần tử trong mảng

// let arrNumber= [1,2,3,4];
// for(let i = 0; i< arrNumber ; i++)
// {
//     sum +=arrNumber[i];
// }
// return sum;

// bai2:Tìm phần tử lớn nhất trong mảng

// let arrList = [1,3,4,6]
// let max = arrList[0];
// for(let i =0 ; i<arrList.length; i++)
// {
//     if(max < arrList[i])
//     {
//         max < arrList[i];
//     }
// }

// bai 3 :Tìm phần tử nhỏ nhất trong mảng

// let arrList = [10,8,2,6]
// let min = arrList[0];
// for(let i =0 ; i < arrList.length; i++)
// {
//     if(min > arrList[i])
//     {
//         min = arrList[i];
//     }
// }
// console.log(`phan tu nho nhat trong mang ${min}`);

// Bai4: Kiểm tra xem phần tử có tồn tại trong mảng hay không
//cach2
// let input = ("nhap phan tu kiem tra");
// let arrList = [1,2,3,4,5];
// let check = false;
// for(let i = 0; i<arrList.length; i++)
// {
//     if(input == arrList)
//     {
//         console.log("True");
//         break;
//     }
// }
// cach1
// let arrList = [1,2,3,4,5];
// console.log(Array.isArray(arrList));

//bai5 Đảo ngược giá trị trong mảng

// let arrNumber = [1,2,3,4,5]
// arrNumber.reverse();
// console.log(arrNumber);

//bai6: Lọc các phần tử chẵn trong mảng
// let arrList = [1,2,5,6,8];
// for(let i =0; i<arrList.length ; i++)
// {
//    sochan = arrList( i % 2 == 0)
// }
// console.log(sochan);

//bai 8:Sắp xếp lại mảng theo giá trị tăng dần
// let arrList =[4,2,9,5,1]
// arrList.sort();
// console.log(arrList);

// bai 7 
let arrList = [1,2,2,5,4,5,1,4]
let nhap = +prompt("nhap vao phan tu "+ x);
for(let i = 0; i<arrList ; i++)
{
    if(arrList[i] == x)
    {
        console.log(`phan tu lap lai ${x} lan `);
    }
}
