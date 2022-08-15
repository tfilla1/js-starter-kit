import './index.css';
import { deleteUser, getUsers } from './api/user-api';

getUsers().then((res) => {
  let usersBody = '';

  res.forEach((user) => {
    usersBody += `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`;
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser')

  Array.from(deleteLinks, link => {
    link.onclick = function(evt) {
        const elm = evt.target;
        evt.preventDefault();
        deleteUser(elm.attributes["data-id"].value);

        const row = elm.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
  })
});
