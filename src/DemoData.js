const DemoData = {
  resources: [
    {
      id: "r0",
      name: "Teaching Interests",
      groupOnly: true
    },
    {
      id: "r1",
      name: "Unavailable",
      parentId: "r0"
    },
    {
      id: "r2",
      name: "Not Ideal",
      parentId: "r0"
    },
    {
      id: "r4",
      name: "Sub Requests",
      groupOnly: true
    },
    {
      id: "r5",
      name: "AC419: Audition Paradigm for the Actor",
      parentId: "r4"
    },
    {
      id: "r6",
      name: "Payroll Addendums"
    }
  ],
  events: [
    {
      id: 1,
      start: "2020-07-18 09:30:00",
      end: "2020-07-19 23:30:00",
      resourceId: "r1",
      title: "I am unavailable",
      bgColor: "#D9D9D9",
      showPopover: false
    },
    {
      id: 2,
      start: "2020-07-22 12:30:00",
      end: "2020-07-23 23:30:00",
      resourceId: "r2",
      title: "Not Ideal",
      bgColor: "#DAA520"
    },
    {
      id: 3,
      start: "2020-07-21 15:30:00",
      end: "2020-07-21 23:30:00",
      resourceId: "r5",
      title: "Seeking sub",
      endResizable: false,
      bgColor: "green"
    },
    {
      id: 4,
      start: "2020-07-19 15:35:00",
      end: "2020-07-19 23:30:00",
      resourceId: "r6",
      title: "Modification for hours worked"
    },
    {
      id: 5,
      start: "2020-07-19 17:30:00",
      end: "2020-07-19 23:30:00",
      resourceId: "r1",
      title: "Unavailable (recurring weekly)",
      rrule: "FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR",
      bgColor: "red"
    }
  ]
  // eventsForTaskView: [
  //   {
  //     id: 1,
  //     start: "2020-07-18 09:30:00",
  //     end: "2020-07-18 23:30:00",
  //     resourceId: "r1",
  //     title: "I am unavailable",
  //     bgColor: "#D9D9D9",
  //     groupId: 1,
  //     groupName: "Task1"
  //   },
  //   {
  //     id: 2,
  //     start: "2020-07-18 12:30:00",
  //     end: "2020-07-26 23:30:00",
  //     resourceId: "r2",
  //     title: "I am not resizable",
  //     resizable: false,
  //     groupId: 2,
  //     groupName: "Task2"
  //   },
  //   {
  //     id: 3,
  //     start: "2020-07-19 12:30:00",
  //     end: "2020-07-20 23:30:00",
  //     resourceId: "r3",
  //     title: "I am not movable",
  //     movable: false,
  //     groupId: 3,
  //     groupName: "Task3"
  //   },
  //   {
  //     id: 7,
  //     start: "2020-07-19 15:40:00",
  //     end: "2020-07-20 23:30:00",
  //     resourceId: "r7",
  //     title: "I am exceptional",
  //     bgColor: "#FA9E95",
  //     groupId: 4,
  //     groupName: "Task4"
  //   },
  //   {
  //     id: 4,
  //     start: "2020-07-20 14:30:00",
  //     end: "2020-07-21 23:30:00",
  //     resourceId: "r5",
  //     title: "I am not start-resizable",
  //     startResizable: false,
  //     groupId: 1,
  //     groupName: "Task1"
  //   },
  //   {
  //     id: 5,
  //     start: "2020-07-21 15:30:00",
  //     end: "2020-07-22 23:30:00",
  //     resourceId: "r5",
  //     title: "I am not end-resizable",
  //     endResizable: false,
  //     groupId: 3,
  //     groupName: "Task3"
  //   },
  //   {
  //     id: 9,
  //     start: "2020-07-21 16:30:00",
  //     end: "2020-07-21 23:30:00",
  //     resourceId: "r1",
  //     title: "R1 has many tasks",
  //     groupId: 4,
  //     groupName: "Task4"
  //   },
  //   {
  //     id: 6,
  //     start: "2020-07-22 15:35:00",
  //     end: "2020-07-23 23:30:00",
  //     resourceId: "r6",
  //     title: "I am normal",
  //     groupId: 1,
  //     groupName: "Task1"
  //   },
  //   {
  //     id: 8,
  //     start: "2020-07-25 15:50:00",
  //     end: "2020-07-26 23:30:00",
  //     resourceId: "r1",
  //     title: "I am locked",
  //     movable: false,
  //     resizable: false,
  //     bgColor: "red",
  //     groupId: 1,
  //     groupName: "Task1"
  //   },
  //   {
  //     id: 10,
  //     start: "2020-07-26 18:30:00",
  //     end: "2020-07-26 23:30:00",
  //     resourceId: "r2",
  //     title: "R2 has many tasks",
  //     groupId: 4,
  //     groupName: "Task4"
  //   },
  //   {
  //     id: 11,
  //     start: "2020-07-27 18:30:00",
  //     end: "2020-07-27 23:30:00",
  //     resourceId: "r14",
  //     title: "R4 has many tasks",
  //     groupId: 4,
  //     groupName: "Task4"
  //   },
  //   {
  //     id: 12,
  //     start: "2020-07-28 18:30:00",
  //     end: "2020-07-28 23:30:00",
  //     resourceId: "r6",
  //     title: "R6 has many tasks",
  //     groupId: 3,
  //     groupName: "Task3"
  //   }
  // ],
  // eventsForCustomEventStyle: [
  //   {
  //     id: 1,
  //     start: "2020-07-18 09:30:00",
  //     end: "2020-07-19 23:30:00",
  //     resourceId: "r1",
  //     title: "I am unavailable",
  //     bgColor: "#D9D9D9",
  //     type: 1
  //   },
  //   {
  //     id: 2,
  //     start: "2020-07-18 12:30:00",
  //     end: "2020-07-26 23:30:00",
  //     resourceId: "r2",
  //     title: "Not Ideal",
  //     resizable: false,
  //     type: 2
  //   },
  //   {
  //     id: 3,
  //     start: "2020-07-19 12:30:00",
  //     end: "2020-07-20 23:30:00",
  //     resourceId: "r3",
  //     title: "I am not movable",
  //     movable: false,
  //     type: 3
  //   },
  //   {
  //     id: 4,
  //     start: "2020-07-19 14:30:00",
  //     end: "2020-07-20 23:30:00",
  //     resourceId: "r5",
  //     title: "I am not start-resizable",
  //     startResizable: false,
  //     type: 1
  //   },
  //   {
  //     id: 5,
  //     start: "2020-07-19 15:30:00",
  //     end: "2020-07-20 23:30:00",
  //     resourceId: "r5",
  //     title: "I am not end-resizable",
  //     endResizable: false,
  //     type: 2
  //   },
  //   {
  //     id: 6,
  //     start: "2020-07-19 15:35:00",
  //     end: "2020-07-19 23:30:00",
  //     resourceId: "r6",
  //     title: "I am normal",
  //     type: 3
  //   },
  //   {
  //     id: 7,
  //     start: "2020-07-19 15:40:00",
  //     end: "2020-07-20 23:30:00",
  //     resourceId: "r7",
  //     title: "I am exceptional",
  //     bgColor: "#FA9E95",
  //     type: 1
  //   },
  //   {
  //     id: 8,
  //     start: "2020-07-19 15:50:00",
  //     end: "2020-07-19 23:30:00",
  //     resourceId: "r1",
  //     title: "I am locked",
  //     movable: false,
  //     resizable: false,
  //     bgColor: "red",
  //     type: 2
  //   },
  //   {
  //     id: 9,
  //     start: "2020-07-19 16:30:00",
  //     end: "2020-07-27 23:30:00",
  //     resourceId: "r1",
  //     title: "R1 has many tasks 1",
  //     type: 3
  //   },
  //   {
  //     id: 10,
  //     start: "2020-07-20 18:30:00",
  //     end: "2020-07-20 23:30:00",
  //     resourceId: "r1",
  //     title: "R1 has many tasks 2",
  //     type: 1
  //   },
  //   {
  //     id: 11,
  //     start: "2020-07-21 18:30:00",
  //     end: "2020-07-22 23:30:00",
  //     resourceId: "r1",
  //     title: "R1 has many tasks 3",
  //     type: 2
  //   },
  //   {
  //     id: 12,
  //     start: "2020-07-23 18:30:00",
  //     end: "2020-07-27 23:30:00",
  //     resourceId: "r1",
  //     title: "R1 has many tasks 4",
  //     type: 3
  //   }
  // ]
};

export default DemoData;
