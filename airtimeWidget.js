function airtimeWidget() {
  return {
      usage: '',
      airtime: '',
      result: '',
      calculateRemainingAirtime() {
          const usageMinutes = parseFloat(this.usage);
          const availableAirtime = parseFloat(this.airtime);

          if (isNaN(usageMinutes) || isNaN(availableAirtime)) {
              this.result = 'Please enter valid numbers for both fields.';
              return;
          } 


          if (usageMinutes > availableAirtime) {
            this.result = 'Balance is not enough';
          } else {
            const remainingAirtime = availableAirtime - usageMinutes;
            this.result = `Remaining Airtime: ${remainingAirtime} minutes`;
          }

         

          
          

          // Clear the result after 3 seconds
          setTimeout(() => {
              this.result = '';
          }, 3000);
      }
  };
}
