import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-quizze',
  templateUrl: './view-quizze.component.html',
  styleUrls: ['./view-quizze.component.css']
})
export class ViewQuizzeComponent {
  quizzes = [
    {qId:30,
      title:'helloooooooooooooooo ',
      description:'this is java quiz..',
      maxMarks:'50',
      numberOfQuestion:'20',
      active:'',
      category:{
        title:'program'
      }
    },
    {qId:30,
      title:'basic java2 ',
      description:'this is java quiz..',
      maxMarks:'50',
      numberOfQuestion:'20',
      active:'',
      category:{
        title:'program'
      }
    },
    

  ];

  constructor(private _quiz: QuizService) {}

  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data: any) => {
        this.quizzes = data;
        console.log(this.quizzes);
      },
      (error:any) => {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');
      }
    );
  }

  //
  deleteQuiz(qId:any) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        //delete...

        this._quiz.deleteQuiz(qId).subscribe(
          (data:any) => {
            this.quizzes = this.quizzes.filter((quiz) => quiz["qId"] != qId);
            Swal.fire('Success', 'Quiz deleted ', 'success');
          },
          (error:any) => {
            Swal.fire('Error', 'Error in deleting quiz', 'error');
          }
        );
      }
    });
  }
}

