export class NavOptions {
  constructor(text: string) {
    this.text = text.charAt(0).toUpperCase() + text.slice(1);
    this.route = text.toLowerCase().replace(' ', '-')
  }

  route: string
  text: string = ''
}
