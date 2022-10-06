import todoReducer, { addTodo, updateTodo, deleteTodo, updateFilterStatus } from '../../slices/todoSlice';

describe('todoSlice', () => {

  it('should return default state when passed an empty action', () => {
    const result = todoReducer(undefined, { type: '' });

    expect(result).toEqual({"filterStatus": "all", "todoList": []});
  });

  it('should update todo status & title with "updateTodo" action', () => {

    const todos = {"filterStatus": "all", "todoList": [{id: 1234, title: '234567', status: 'incomplete', time: 'Thu Oct 06 2022 02:47:12 GMT+0200 (Центральная Европа, летнее время)'}]};
    const newTodos = {id: 1234, title: 'sdfg3333', status: 'complete', time: 'Thu Oct 06 2022 02:47:12 GMT+0200 (Центральная Европа, летнее время)'};
    const action = {type: updateTodo.type, payload: newTodos};
    const result = todoReducer(todos, action);

    expect(result).toEqual({"filterStatus": 'all', "todoList": [{id: 1234, title: 'sdfg3333', status: 'complete', time: 'Thu Oct 06 2022 02:47:12 GMT+0200 (Центральная Европа, летнее время)'}]});
  });

  it('should add new todo item with "addTodo" action', () => {
    const todos = {"filterStatus": "all", "todoList": [{id: 1234, title: '23dfttt', status: 'complete', time: 'Thu Oct 06 2022 02:49:12 GMT+0200 (Центральная Европа, летнее время)'}]};
    const action = {type: addTodo.type, payload: {id: '4af19a96-9593-40f6-a956-44e47c10a536', title: '234567', status: 'incomplete', time: 'Thu Oct 06 2022 02:47:12 GMT+0200 (Центральная Европа, летнее время)'}};
    const result = todoReducer(todos, action);

    expect(result).toEqual({"filterStatus": "all", "todoList": [{"id": 1234, "status": "complete", "time": "Thu Oct 06 2022 02:49:12 GMT+0200 (Центральная Европа, летнее время)", "title": "23dfttt"}, {"id": "4af19a96-9593-40f6-a956-44e47c10a536", "status": "incomplete", "time": "Thu Oct 06 2022 02:47:12 GMT+0200 (Центральная Европа, летнее время)", "title": "234567"}]});
  });

  it('should delete todo with "deleteTodo" action', () => {

    const todos = {"filterStatus": "all", "todoList": [{id: '1234kjkgf', title: '234567', status: 'incomplete', time: 'Thu Oct 06 2022 02:47:12 GMT+0200 (Центральная Европа, летнее время)'}]};
   
    const action = {type: deleteTodo.type, payload: '1234kjkgf'};
    const result = todoReducer(todos, action);

    expect(result).toEqual({"filterStatus": 'all', "todoList": []});
  });

   it('should update todo status & title with "updateFilterStatus" action', () => {

    const todos = {"filterStatus": "all", "todoList": [{id: 1234, title: '234567', status: 'incomplete', time: 'Thu Oct 06 2022 02:47:12 GMT+0200 (Центральная Европа, летнее время)'}]};
    const action = {type: updateFilterStatus.type, payload: 'incomplete'};

    const result = todoReducer(todos, action);

    expect(result).toEqual({"filterStatus": 'incomplete', "todoList": [{id: 1234, title: '234567', status: 'incomplete', time: 'Thu Oct 06 2022 02:47:12 GMT+0200 (Центральная Европа, летнее время)'}]});
  });

});