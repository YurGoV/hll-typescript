// Написати декоратор методу @Catch, який має перехоплювати помилки
// та виводити повідомлення
// "Oops, there is an error in ${METHOD_NAME}: ${ERROR}".
//
// Наприклад
//
// class UsersService {
//   @Catch
//   getUsers() {
//     throw new Error("No users");
//   }
// }
// На виклику методу getUsers у консоль має вивестись повідомлення "Oops, there is an error in getUsers: No users"

function Catch(target: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const originalMethod = descriptor.value;

  descriptor.value = (...args: any[]): any => {
    try {
      return originalMethod.apply(target, args);
    } catch (error: any) {
      console.log(`Oops, there is an error in ${methodName}: ${error}`);
    }
  };

  return descriptor;
}

class UsersService {
  @Catch
  getUsers(user?: string): void {
    if (!user) {
      throw new Error('No users');
    } else {
      console.log('provided user is: ', user);
    }
  }
}

// Example usage
const userService = new UsersService();
userService.getUsers();
userService.getUsers('user');
