function grossSalary(benefit, salary){
    let gross = benefit + salary;
    let NSSF = gross * 0.06;
    

    if (gross <= 24000){
        PAYE = (gross*0.1)
    }
    else if (gross >= 24001 && gross <= 32333) {
       PAYE = (gross * 0.25)
    }
    else if (gross > 32333) {
        PAYE = (gross * 0.3)
    }
 
    console.log('Gross salary', gross)
    console.log('NSSF deductions', NSSF)
    console.log('PAYE deduction', PAYE)
    
    
    
        if (gross <= 5999){
            NHIF = (150)
        }else if (gross > 6000 && gross <= 7999){
            NHIF = (300)
        }else if( gross > 8000 && gross <= 11999){
            NHIF = (400)
        }else if ( gross > 12000 && gross <= 14999){
            NHIF = (500)
        }else if (gross > 15000 && gross <= 19999){
            NHIF = (600)
        }else if(gross > 15000 && gross <= 24999){
            NHIF = (750)
        }else if( gross > 25000 && gross <= 29999){
            NHIF = (850)
        }else if (gross > 30000 && gross <= 34999){
            NHIF = (900)
        }else if (gross > 35000 && gross <= 39999){
            NHIF = (950)
        }else if (gross > 40000 && gross <= 44999){
            NHIF =(1000)
        }else if (gross > 45000 && gross <= 49999){
            NHIF = (1100)
        }else if (gross > 50000 && gross <= 59999){
            NHIF = (1200)
        }else if (gross > 60000 && gross <= 69999){
            NHIF = (1300)
        }else if (gross > 70000 && gross <= 79999){
            NHIF = (1400)
        }else if (gross > 80000 && gross <= 89999){
            NHIF = (1500)
        }else if (gross > 90000 && gross <= 99999){
            NHIF = (1600)
        }else if (gross >= 100000){
            NHIF = (1700)
        }
    
        console.log('NHIF deduction:', NHIF)
        console.log('Taxes:', (PAYE + NSSF + NHIF ))
        
        let netSalary = 'Net Salary:' + (gross - (PAYE + NSSF + NHIF ))
        return netSalary;

}
        inputSalary();