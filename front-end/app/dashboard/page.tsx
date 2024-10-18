import React from 'react';

export default function Dashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-8">
        {/* Header */}
        <header className="flex items-center space-x-4 mb-8">
          <div className="bg-gray-200 p-4 rounded">
            <span className="text-2xl font-semibold">A+</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Student Dashboard</h1>
        </header>

        {/* Sidebar and Main Content */}
        <div className="grid grid-cols-12 gap-4">
          {/* Sidebar */}
          <aside className="col-span-3 space-y-6">
            <section className="space-y-4">
              <h2 className="text-lg font-bold">Quick Capture</h2>
              <div className="flex flex-col space-y-2">
                <button className="bg-gray-100 p-2 rounded hover:bg-gray-200">New Assignment</button>
                <button className="bg-gray-100 p-2 rounded hover:bg-gray-200">New Note</button>
                <button className="bg-gray-100 p-2 rounded hover:bg-gray-200">New Exam</button>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold">Navigation</h2>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-800">📚 Classes</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">📋 Assignments</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">📝 Exams</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">🗒️ Notes</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">🗃️ Databases</a></li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold">Quick Links</h2>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-800">📅 Calendar</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">📊 Progress</a></li>
              </ul>
            </section>
          </aside>

          {/* Main Content */}
          <main className="col-span-9 space-y-6">
            {/* Classes Section */}
            <section className="space-y-4">
              <header className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Classes</h2>
                <button className="text-gray-600 hover:text-gray-800">📷 Gallery</button>
              </header>

              <div className="grid grid-cols-4 gap-4">
                {/* Class Cards */}
                <div className="bg-white p-4 shadow rounded space-y-2">
                  <div className="text-2xl">📐 Math</div>
                  <p className="text-gray-600 text-sm">2 Assignments, 0 Exams</p>
                  <div className="w-full bg-gray-200 rounded h-2">
                    <div className="bg-blue-600 h-2 rounded" style={{ width: '33%' }}></div>
                  </div>
                </div>

                <div className="bg-white p-4 shadow rounded space-y-2">
                  <div className="text-2xl">⚗️ Chemistry</div>
                  <p className="text-gray-600 text-sm">3 Assignments, 0 Exams</p>
                  <div className="w-full bg-gray-200 rounded h-2">
                    <div className="bg-blue-600 h-2 rounded" style={{ width: '0%' }}></div>
                  </div>
                </div>

                <div className="bg-white p-4 shadow rounded space-y-2">
                  <div className="text-2xl">🔬 Physics</div>
                  <p className="text-gray-600 text-sm">2 Assignments, 0 Exams</p>
                  <div className="w-full bg-gray-200 rounded h-2">
                    <div className="bg-blue-600 h-2 rounded" style={{ width: '33%' }}></div>
                  </div>
                </div>

                <div className="bg-white p-4 shadow rounded space-y-2">
                  <div className="text-2xl">💻 Computing</div>
                  <p className="text-gray-600 text-sm">2 Assignments, 0 Exams</p>
                  <div className="w-full bg-gray-200 rounded h-2">
                    <div className="bg-blue-600 h-2 rounded" style={{ width: '33%' }}></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Calendar Section */}
            <section>
              <h2 className="text-xl font-bold">Assignments/Exams</h2>
              <div className="flex space-x-4">
                <button className="text-gray-600 hover:text-gray-800">This Week</button>
                <button className="text-gray-600 hover:text-gray-800">This Month</button>
              </div>
              {/* Add your calendar component here */}
              <div className="mt-4 bg-white p-4 rounded shadow">
                {/* Placeholder for calendar */}
                <p className="text-gray-600">September 2023 Calendar</p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};



