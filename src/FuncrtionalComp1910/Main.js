import * as React from 'react';
import Card from 'react-bootstrap/Card';
import AddTodoField from './AddTodoField';
import TodoList from './TodoList';
import Table from 'react-bootstrap/Table';

const Main = ()=>{
    const [listData, setListData] = React.useState([]);

    const listDataManipulator = (text)=>{
        const listDataObject = {
            id: listData.length+1,
            text: text
        }
        
        const finalList = [...listData, listDataObject];
        setListData(finalList);
    }

    const listDataDeleteManipulator = (deleteionId)=>{
        const finalData = listData.filter(function(el){
            if(el.id === deleteionId){
                return false;
            }else{
                return true;
            }
        });
        setListData(finalData);
    }

    return (
        <section className='main-component'>
            <div className='container'>
                <div className='col-lg-12' style={{ marginTop: "10em" }}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Todo List</Card.Title>



                            <AddTodoField listDataManipulator={listDataManipulator} />
                            <hr />
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Task</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TodoList callback={listDataDeleteManipulator} list={listData} />
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </section>
    );
}

export default Main;


// export class Main_old extends React.Component {
//     constructor() {
//         super();
//         //iniitial state of the todo
//         this.state = {
//             list: []
//         };

//         this.onTodoAdd = this.onTodoAdd.bind(this);
//     }

//     onTodoAdd(text) {
//         const finalList = { list: [...this.state.list, { id: this.generateRandomNum(), text: text }] };
//         console.log(finalList);
//         this.setState(finalList);
//     }

//     callbackExample(text){
//         console.log(text);
//     }

//     //imp
//     generateRandomNum = () => Math.floor(Math.random() * 1000);

//     render() {
//         return (
//             <section className='main-component'>
//                 <div className='container'>
//                     <div className='col-lg-12' style={{ marginTop: "10em" }}>
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Todo List</Card.Title>



//                                 <AddTodoField callback={this.callbackExample} onAdd={this.onTodoAdd} />
//                                 <hr />
//                                 <Table striped bordered hover>
//                                     <thead>
//                                         <tr>
//                                             <th>#</th>
//                                             <th>Task</th>
//                                             <th>Action</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <TodoList list={this.state.list} />
//                                     </tbody>
//                                 </Table>
//                             </Card.Body>
//                         </Card>

//                     </div>
//                 </div>
//             </section>
//         );
//     }
// }