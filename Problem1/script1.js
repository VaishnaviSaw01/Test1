const container = document.getElementById('container');
const ul = document.createElement('ul');
container.appendChild(ul);

const students = [
    { name: 'Alice Johnson', marks: 95 },
    { name: 'Bob Smith', marks: 87 },
    { name: 'Carol Davis', marks: 92 }
];

const colors = ['#FFE5E5', '#E5F3FF', '#E5FFE5'];

for (let i = 0; i < students.length; i++) {
    const li = document.createElement('li');
    li.textContent = `${students[i].name}: ${students[i].marks}`;
    li.style.backgroundColor = colors[i];
    li.style.padding = '10px';
    li.style.margin = '5px 0';
    li.style.borderRadius = '4px';
    ul.appendChild(li);
}