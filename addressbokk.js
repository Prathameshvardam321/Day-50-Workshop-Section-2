window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
})
const createInnerHtml= () =>{
    const header = "   <th>FullName</th><th>Address</th><th>City</th> <th>State</th><th>Zip Code</th> <th>Phone Number</th>";
    const innerHtml = `${header}
    <tr>
    <td>Narayan Mahadevan</td>
    <td>Rang sharda , Amend tower</td>
    <td>Mumbai</td>
           <td>Maharashtra</td>
    <td>400078</td>
    <td>921012991</td>
    <td>
        <img id="1" onclick="remove(this)" alt="delete"
        src="./icons/delete-black-18dp.svg">
        <img id="1" alt="edit" onclick="update(this)"
        src="./icons/create-black-18dp.svg">
    </td>    
</tr>
`
;
document.querySelector('#display').innerHTML = innerHtml; 
}