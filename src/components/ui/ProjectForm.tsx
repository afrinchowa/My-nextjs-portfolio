
import { createProject } from "@/actions/createProject";
import Form from "next/form";
const ProjectForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen my-10">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <Form action={createProject}>
          <h2 className="text-2xl font-semibold mb-6 text-teal-600 text-center">
            Create Project
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {/* projectName */}
            <div>
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-700"
              >
                Project Name
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter Project projectName"
              />
            </div>
            {/* clientName */}
            <div>
              <label
                htmlFor="clientName"
                className="block text-sm font-medium text-gray-700"
              >
                Client Name
              </label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter clientName"
              />
            </div>
            {/* Start Date */}
            <div>
              <label
                htmlFor="startDate"
                className="block text-sm font-medium text-gray-700"
              >
                Start Date
              </label>
              <input
                type="startDate"
                name="startDate"
                id="startDate"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              />
            </div>
            {/* budget */}
            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-700"
              >
                Budget
              </label>
              <input
                type="number"
                name="budget"
                id="budget"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter budget"
              />
            </div>
          </div>
          {/* Project Image (URL Input) */}
          <div className="my-5">
            <label
              htmlFor="projectImage"
              className="block text-sm font-medium text-gray-700"
            >
              Project Image URL
            </label>
            <input
              type="url"
              id="projectImage"
              name="projectImage"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Paste image URL here"
            />
          </div>
          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Enter Project description"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Create
          </button>
        </Form>
      </div>
    </div>
  );
};

export default ProjectForm;
