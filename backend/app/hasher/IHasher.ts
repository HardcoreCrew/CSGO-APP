export default interface IHasher {

  hash(password: string): Promise<string>

  isMatch(plainTextPassword: string, hashedPassword: string): Promise<boolean>
}
