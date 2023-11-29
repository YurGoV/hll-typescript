// Створіть класи Circle, Rectangle, Square і Triangle.
// У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір і назва,
// які не можна змінювати після створення. У Square і Rectangle
// зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі

// Уявімо, що ми розробляємо платіжну систему.
// Бекенд розробники віддали нам ендпоінт, на який потрібно відправити наступну інформацію:

// {
// 	"sum": 10000,
// 	"from": 2,
// 	"to": 4
// }

// У відповідь сервер надішле один з наступних варіантів (при успіху або провалі)
// In case of success
// {
// 	"status": "success",
// 	"data": {
// 		"databaseId": 567,
// 		"sum": 10000,
// 		"from": 2,
// 		"to": 4
// 	}
// },

// // In case of fail
// {
// 	"status": "failed",
// 	"data": {
// 		"errorMessage": "Недостаточно средств",
// 		"errorCode": 4
// 	}
// }

// enum EStatus {
//   Success = "success",
//   Failed = "failed",
// }

// type TErrorCode = 400 | 404 | 500;

// interface IPayment {
//   readonly sum: number;
//   readonly from: number;
//   readonly to: number;
// }

// interface IPaymentRequest extends IPayment {}

// interface ISuccessResponseData extends IPayment {
//   databaseId: number;
// }

// interface IFailedResponseData {
//   errorMessage: string;
//   errorCode: TErrorCode;
// }

// interface ISuccessResponse {
//   status: EStatus.Success;
//   data: ISuccessResponseData;
// }

// interface IFailedResponse {
//   status: EStatus.Failed;
//   data: IFailedResponse;
// }

// const resp: ISuccessResponse = {
//   status: EStatus.Success,
//   data: {
//     databaseId: 567,
//     sum: 10000,
//     from: 2,
//     to: 4,
//   },
// };

// const resp1: ISuccessResponse = {
//   status: EStatus.Failed,
//   data: {
//     databaseId: 567,
//     sum: 10000,
//     from: 2,
//     to: 4,
//   },
// };
