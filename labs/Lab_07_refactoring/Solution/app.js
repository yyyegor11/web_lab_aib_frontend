 //Задча 1
    let var_one = prompt('var one');
    let var_two = prompt('var two');
    if (var_one === var_two)
      console.log('equally')
    else
      console.log('not equally');


    //Задача 2
    var f = ['apple', 'strawberry', 'blueberry', 'raspberry', 'lemon']
    console.log(f.toString())
    for(let i = 0; i < 5; i+=1)
      if (f[i] === 'apple')
        {
        console.log('apple green')
        }
      else if (f[i] === 'strawberry')
        {
        console.log('strawberry red')
        }
      else if (f[i] === 'blueberry')
        {
        console.log('blueberry blue')
        }
      else if (f[i] === 'raspberry')
        {
        console.log('raspberry ligth red')
        }
      else if (f[i] === 'lemon')
        {
        console.log('lemon yellow')
        }

    //Задача 3
    function inputt(input_string)
      {
      let valuee = undefined
      while(true)
        {
        if(isNaN(parseFloat(c)))
          valuee = prompt(input_string, undefined);
        else
          {
          valuee = parseFloat(valuee);
          break
          }
        }
      return valuee;
      }
    let count_people = inputt('Введите кол-во человек ');
    let salary = inputt('Введите зарплату на человека ');
    alert('Затраты на ЗП: ' + count_people*salary);


    //Задача 4
    let Sum = 0;
    let ploxieStudenti = [];
    let klassSoStudentami = [{FIO:'Петров А.А.',Ocenka:5},
    {FIO:'Иванов Б.Б.',Ocenka:3.4},{FIO:'Сидоров Г.Г.',Ocenka:9},
    {FIO:'Немолодой Д.Д',Ocenka:2},{FIO:'Молодой Е.Е',Ocenka:3.4}];
    for(let i = 0; i < 5; i++)
      {
      if((klassSoStudentami[i].Ocenka > klassSoStudentami.length) || (klassSoStudentami[i].Ocenka < 0))
        console.log('Это значение учитываться не будет оно не соответствует допустимым значениям: '+ klassSoStudentami[i].FIO + klassSoStudentami[i].Ocenka);
      else if ((klassSoStudentami[i].Ocenka <= 5) && (klassSoStudentami[i].Ocenka >= 4))
        Sum += klassSoStudentami[i].Ocenka;
      else if (klassSoStudentami[i].Ocenka < 4) 
        {
        Sum += klassSoStudentami[i].Ocenka;
        ploxieStudenti.push(klassSoStudentami[i]);
        }
      }
    Sum /= klassSoStudentami.length;
    console.log('Средняя оценка: '+Sum);
    console.log('Плохие студенты: ')
    if(  ploxieStudenti.length === 0 ) 
      console.log('Таких нет');
    else
      ploxieStudenti.forEach((znachenie)=>{console.log('Фио: '+znachenie.FIO+'; Оценка: '+znachenie.Ocenka)});
