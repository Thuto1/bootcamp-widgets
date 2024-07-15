function transportWidget() {
  return {
      selectedShift: '',

      calculateTransportFee() {
          switch (this.selectedShift) {
              case 'morning':
                  return 'Transport Fee for Morning Shift: $10';
              case 'afternoon':
                  return 'Transport Fee for Afternoon Shift: $15';
              case 'night':
                  return 'Transport Fee for Night Shift: $20';
              default:
                  return '';
          }
      }
  };
}
