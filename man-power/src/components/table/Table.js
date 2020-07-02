import React from "react";

function table() {
  return (
    <div class="container mt-5">
      <h3 class="text-center mb-3">h3 - reuseable responsive table</h3>
      <p>p</p>
      <div class="table-responsive">
        <table class="table table-striped table-bordered table-hover">
          <thead>
            <tr class="bg-dark text-white">
              <th scope="col">table.th</th>
              <th scope="col">table.th</th>
              <th scope="col">table.th</th>
              <th scope="col">table.th</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">table.tbody.tr.th</th>
              <td>table.tbody.tr.td</td>
              <td>0525874154</td>
              <td>
                <button className="btn btn-outline-danger btn-block">
                  table.tbody.tr.td.button
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default table;
