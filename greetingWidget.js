function greetingWidget() {
  return {
      name: '',
      language: 'english',
      message: '',
      greetings: {
          sepedi: 'Thobela Morena',
          english: 'Hello',
          french: 'Bonjour',
          german: 'Hallo'
      },
      greet() {
          if (this.name.trim() === '') {
              this.message = 'Please enter your name.';
          } else {
              this.message = `${this.greetings[this.language]}, ${this.name}!`;
          }
          setTimeout(() => {
            this.message = '';
        }, 3000);
      }
  };
}

