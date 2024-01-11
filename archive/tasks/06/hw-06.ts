import { Accounting } from './accounting';
import { Company } from './company';
import { Department } from './departments';
import { Worker } from './workers';

export const accounting = new Accounting();
export const company = new Company('StartUp');
console.log('company name is: ', company.name);

export const fDepartment = new Department('frontend', 'developers');
console.log(company.getDepartments(), 'company departments - 1');
console.log(fDepartment.getBudgetSummary(), 'fDepartment getBudgetSummary - 1');
console.log(fDepartment.getWorkersList(), 'fDepartment getWorkersList - 1');

const workerMukuta = new Worker('Mukuta', 15000, 'pre-worker');
const workerIrina = new Worker('Irina', 20000, 'pre-worker');
console.log(workerMukuta, 'workerMukuta - 1');
console.log(workerIrina, 'workerIrina - 1');

fDepartment.addWorker(workerMukuta);
fDepartment.addWorker(workerIrina);
console.log(fDepartment.getBudgetSummary(), 'fDepartment getBudgetSummary - 2');
console.log(fDepartment.getWorkersList(), 'fDepartment getWorkersList - 2');

accounting.paySalary();

console.log(workerMukuta, 'workerMukuta - 2');
console.log(workerIrina, 'workerIrina - 2');

fDepartment.removeWorker(workerMukuta);
console.log(fDepartment.getBudgetSummary(), 'fDepartment getBudgetSummary - 3');
console.log(fDepartment.getWorkersList(), 'fDepartment getWorkersList - 3');

console.log(company.getDepartments(), 'company departments - 2');

// workerMukuta.salary = 15000; expected error
workerMukuta.setSalary(15000);
workerIrina.setSalary(20000);

// NOTE: Output:
//
// ❯ node dist/hw-06.js
// company name is:  StartUp
// [
//   Department {
//     name: 'frontend',
//     domain: 'developers',
//     budget: { debit: 3000000, credit: 30000000 },
//     workersList: []
//   }
// ] company departments - 1
// Current budget of frontend department: Debit: 3000000, Credit: 30000000 fDepartment getBudgetSummary - 1
// [] fDepartment getWorkersList - 1
// Worker {
//   fullName: 'Mukuta',
//   department: null,
//   _salary: 15000,
//   bankAccount: 0,
//   status: 'pre-worker'
// } workerMukuta - 1
// Worker {
//   fullName: 'Irina',
//   department: null,
//   _salary: 20000,
//   bankAccount: 0,
//   status: 'pre-worker'
// } workerIrina - 1
//
// ============
//
// Current budget of frontend department: Debit: 2965000, Credit: 30035000 fDepartment getBudgetSummary - 2
// [
//   Worker {
//     fullName: 'Mukuta',
//     department: 'frontend',
//     _salary: 17250,
//     bankAccount: 0,
//     status: 'on-job'
//   },
//   Worker {
//     fullName: 'Irina',
//     department: 'frontend',
//     _salary: 23000,
//     bankAccount: 0,
//     status: 'on-job'
//   }
// ] fDepartment getWorkersList - 2
// Worker {
//   fullName: 'Mukuta',
//   department: 'frontend',
//   _salary: 17250,
//   bankAccount: 17250,
//   status: 'on-job'
// } workerMukuta - 2
// Worker {
//   fullName: 'Irina',
//   department: 'frontend',
//   _salary: 23000,
//   bankAccount: 23000,
//   status: 'on-job'
// } workerIrina - 2
//
//  ==================
//
// Current budget of frontend department: Debit: 2942000, Credit: 30017750 fDepartment getBudgetSummary - 3
// [
//   Worker {
//     fullName: 'Irina',
//     department: 'frontend',
//     _salary: 23000,
//     bankAccount: 23000,
//     status: 'on-job'
//   }
// ] fDepartment getWorkersList - 3
// [
//   Department {
//     name: 'frontend',
//     domain: 'developers',
//     budget: { debit: 2942000, credit: 30017750 },
//     workersList: [ [Worker] ]
//   }
// ] company departments - 2
// ERROR: company politic no approve to decrease salary
// ERROR: company politic no approve to decrease salary
//   hll-typescript   hw-06 ⇡1 *4 !8 ❯                                                                                                      10:36:11
//
