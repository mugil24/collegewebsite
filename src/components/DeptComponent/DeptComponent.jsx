import React from 'react'
import './DeptComponent.css'

const DeptComponent = () => {
  return (
    <div className="department-table-container">
      <table className="department-table">
        <thead>
          <tr>
            <th>Dept</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AIML</td>
            <td>60</td>
          </tr>
          <tr>
            <td>AIDS</td>
            <td>60</td>
          </tr>
          <tr>
            <td>CSE</td>
            <td>180</td>
          </tr>
          <tr>
            <td>IT</td>
            <td>67</td>
            
          </tr>
          <tr>
            <td>ECE</td>
            <td>90</td>
          </tr>
          <tr>
            <td>EEE</td>
            <td>40</td>
          </tr>
          <tr>
            <td>CYBERSECURITY</td>
            <td>77</td>
          </tr>
          <tr>
            <td>IOT</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DeptComponent
