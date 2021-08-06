// type ExistingUser = {
//   id: number;
//   name: string;
// };

// type NewUser = {
//   name: string;
// };

// function deleteUser(user: { id?: number; name: string }) {
//   delete user.id;
// }

// let existingUser: ExistingUser = {
//   id: 123456,
//   name: "Ima User",
// };

// deleteUser(existingUser);

// type LegacyUser = {
//   id?: number | string;
//   name: string;
// };

// let legacyUser: LegacyUser = {
//   id: "793331",
//   name: "Xin Yang",
// };

// deleteUser(legacyUser);

// class Animal {}
// class Bird extends Animal {
//   chirp() {}
// }
// class Crow extends Bird {
//   caw() {}
// }

// function chirp(bird: Bird): Bird {
//   bird.chirp();
//   return bird;
// }

// chirp(new Animal());

// chirp(new Bird());
// chirp(new Crow());

// function clone(f: (b: Bird) => Bird): void {
//   // let parent = new Bird();
//   // let babyBird = f(parent);
//   // babyBird.chirp();
// }

// function birdToBird(b: Bird): Bird {}
// clone(birdToBird);

// function birdToCrow(d: Bird): Crow {}
// clone(birdToCrow);

// function birdToAnimal(d: Bird): Animal {}
// clone(birdToAnimal);

// function animalToBird(a: Animal): Bird {}
// clone(animalToBird);

// function crowToBird(c: Crow): Bird {
//   c.caw();
//   return new Bird();
// }
// clone(crowToBird);
