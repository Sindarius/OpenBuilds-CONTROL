function selectMachine(type) {
  if (type == "sphinx55") {
    // Sphinx 55 - COMPLETE with homing switches
    var grblParams_def = {
      $0: "10", //"Step pulse time, microseconds"
      $1: "255", //"Step idle delay, milliseconds"
      $2: "0", //"Step pulse invert, mask"
      $3: "4", //"Step direction invert, mask"
      $4: "1", //"Invert step enable pin, boolean"
      $5: "0", //"Invert limit pins, boolean"
      $6: "0", //"Invert probe pin, boolean"
      $10: "1", //"Status report options, mask"
      $11: "0.020", //"Junction deviation, millimeters"
      $12: "0.002", //"Arc tolerance, millimeters"
      $13: "0", //"Report in inches, boolean"
      $20: "0", //"Soft limits enable, boolean"
      $21: "0", //"Hard limits enable, boolean"
      $22: "1", //"Homing cycle enable, boolean"
      $23: "3", //"Homing direction invert, mask"
      $24: "100.000", //"Homing locate feed rate, mm/min"
      $25: "1000.000", //"Homing search seek rate, mm/min"
      $26: "250", //"Homing switch debounce delay, milliseconds"
      $27: "3.000", //"Homing switch pull-off distance, millimeters"
      $30: "1000", //"Maximum spindle speed, RPM"
      $31: "0", //"Minimum spindle speed, RPM"
      $32: "0", //"Maximum spindle speed, RPM"
      $100: "199.100", //"X-axis steps per millimeter"
      $101: "199.100", //"Y-axis steps per millimeter"
      $102: "199.100", //"Z-axis steps per millimeter"
      $110: "2500.000", //"X-axis maximum rate, mm/min"
      $111: "2500.000", //"Y-axis maximum rate, mm/min"
      $112: "2500.000", //"Z-axis maximum rate, mm/min"
      $120: "150.000", //"X-axis acceleration, mm/sec^2"
      $121: "150.000", //"Y-axis acceleration, mm/sec^2"
      $122: "150.000", //"Z-axis acceleration, mm/sec^2"
      $130: "333.000", //"X-axis maximum travel, millimeters"
      $131: "325.000", //"Y-axis maximum travel, millimeters"
      $132: "85.000", //"Z-axis maximum travel, millimeters"
    }
  } else if (type == "sphinx1050") {
    // Sphinx 1050
    var grblParams_def = {
      $0: "10", //"Step pulse time, microseconds"
      $1: "255", //"Step idle delay, milliseconds"
      $2: "0", //"Step pulse invert, mask"
      $3: "4", //"Step direction invert, mask"
      $4: "1", //"Invert step enable pin, boolean"
      $5: "0", //"Invert limit pins, boolean"
      $6: "0", //"Invert probe pin, boolean"
      $10: "1", //"Status report options, mask"
      $11: "0.020", //"Junction deviation, millimeters"
      $12: "0.002", //"Arc tolerance, millimeters"
      $13: "0", //"Report in inches, boolean"
      $20: "0", //"Soft limits enable, boolean"
      $21: "0", //"Hard limits enable, boolean"
      $22: "1", //"Homing cycle enable, boolean"
      $23: "3", //"Homing direction invert, mask"
      $24: "100.000", //"Homing locate feed rate, mm/min"
      $25: "1000.000", //"Homing search seek rate, mm/min"
      $26: "250", //"Homing switch debounce delay, milliseconds"
      $27: "3.000", //"Homing switch pull-off distance, millimeters"
      $30: "1000", //"Maximum spindle speed, RPM"
      $31: "0", //"Minimum spindle speed, RPM"
      $32: "0", //"Maximum spindle speed, RPM"
      $100: "199.100", //"X-axis steps per millimeter"
      $101: "199.100", //"Y-axis steps per millimeter"
      $102: "199.100", //"Z-axis steps per millimeter"
      $110: "2500.000", //"X-axis maximum rate, mm/min"
      $111: "2500.000", //"Y-axis maximum rate, mm/min"
      $112: "2500.000", //"Z-axis maximum rate, mm/min"
      $120: "150.000", //"X-axis acceleration, mm/sec^2"
      $121: "150.000", //"Y-axis acceleration, mm/sec^2"
      $122: "150.000", //"Z-axis acceleration, mm/sec^2"
      $130: "833.5", //"X-axis maximum travel, millimeters"
      $131: "325", //"Y-axis maximum travel, millimeters"
      $132: "85", //"Z-axis maximum travel, millimeters"
    }
  } else if (type == "workbee1050") {
    //Workbee 1050 COMPLETE with homing switches
    var grblParams_def = {
      $0: "10", //"Step pulse time, microseconds"
      $1: "255", //"Step idle delay, milliseconds"
      $2: "0", //"Step pulse invert, mask"
      $3: "4", //"Step direction invert, mask"
      $4: "1", //"Invert step enable pin, boolean"
      $5: "0", //"Invert limit pins, boolean"
      $6: "0", //"Invert probe pin, boolean"
      $10: "1", //"Status report options, mask"
      $11: "0.020", //"Junction deviation, millimeters"
      $12: "0.002", //"Arc tolerance, millimeters"
      $13: "0", //"Report in inches, boolean"
      $20: "0", //"Soft limits enable, boolean"
      $21: "0", //"Hard limits enable, boolean"
      $22: "1", //"Homing cycle enable, boolean"
      $23: "3", //"Homing direction invert, mask"
      $24: "100.000", //"Homing locate feed rate, mm/min"
      $25: "1000.000", //"Homing search seek rate, mm/min"
      $26: "250", //"Homing switch debounce delay, milliseconds"
      $27: "3.000", //"Homing switch pull-off distance, millimeters"
      $30: "1000", //"Maximum spindle speed, RPM"
      $31: "0", //"Minimum spindle speed, RPM"
      $32: "0", //"Maximum spindle speed, RPM"
      $100: "199.100", //"X-axis steps per millimeter"
      $101: "199.100", //"Y-axis steps per millimeter"
      $102: "199.100", //"Z-axis steps per millimeter"
      $110: "2500.000", //"X-axis maximum rate, mm/min"
      $111: "2500.000", //"Y-axis maximum rate, mm/min"
      $112: "2500.000", //"Z-axis maximum rate, mm/min"
      $120: "150.000", //"X-axis acceleration, mm/sec^2"
      $121: "150.000", //"Y-axis acceleration, mm/sec^2"
      $122: "150.000", //"Z-axis acceleration, mm/sec^2"
      $130: "317.000", //"X-axis maximum travel, millimeters"
      $131: "762.000", //"Y-axis maximum travel, millimeters"
      $132: "122.000", //"Z-axis maximum travel, millimeters"
    }
  } else if (type == "workbee1010") {
    // Workbee 1010
    var grblParams_def = {
      $0: "10", //"Step pulse time, microseconds"
      $1: "255", //"Step idle delay, milliseconds"
      $2: "0", //"Step pulse invert, mask"
      $3: "4", //"Step direction invert, mask"
      $4: "1", //"Invert step enable pin, boolean"
      $5: "0", //"Invert limit pins, boolean"
      $6: "0", //"Invert probe pin, boolean"
      $10: "1", //"Status report options, mask"
      $11: "0.020", //"Junction deviation, millimeters"
      $12: "0.002", //"Arc tolerance, millimeters"
      $13: "0", //"Report in inches, boolean"
      $20: "0", //"Soft limits enable, boolean"
      $21: "0", //"Hard limits enable, boolean"
      $22: "1", //"Homing cycle enable, boolean"
      $23: "3", //"Homing direction invert, mask"
      $24: "100.000", //"Homing locate feed rate, mm/min"
      $25: "1000.000", //"Homing search seek rate, mm/min"
      $26: "250", //"Homing switch debounce delay, milliseconds"
      $27: "3.000", //"Homing switch pull-off distance, millimeters"
      $30: "1000", //"Maximum spindle speed, RPM"
      $31: "0", //"Minimum spindle speed, RPM"
      $32: "0", //"Maximum spindle speed, RPM"
      $100: "199.100", //"X-axis steps per millimeter"
      $101: "199.100", //"Y-axis steps per millimeter"
      $102: "199.100", //"Z-axis steps per millimeter"
      $110: "2500.000", //"X-axis maximum rate, mm/min"
      $111: "2500.000", //"Y-axis maximum rate, mm/min"
      $112: "2500.000", //"Z-axis maximum rate, mm/min"
      $120: "150.000", //"X-axis acceleration, mm/sec^2"
      $121: "150.000", //"Y-axis acceleration, mm/sec^2"
      $122: "150.000", //"Z-axis acceleration, mm/sec^2"
      $130: "824.000", //"X-axis maximum travel, millimeters"
      $131: "780.000", //"Y-axis maximum travel, millimeters"
      $132: "122.000", //"Z-axis maximum travel, millimeters"
    }
  } else if (type == "workbee1510") {
    // Workbee1510
    var grblParams_def = {
      $0: "10", //"Step pulse time, microseconds"
      $1: "255", //"Step idle delay, milliseconds"
      $2: "0", //"Step pulse invert, mask"
      $3: "6", //"Step direction invert, mask"
      $4: "1", //"Invert step enable pin, boolean"
      $5: "0", //"Invert limit pins, boolean"
      $6: "0", //"Invert probe pin, boolean"
      $10: "1", //"Status report options, mask"
      $11: "0.020", //"Junction deviation, millimeters"
      $12: "0.002", //"Arc tolerance, millimeters"
      $13: "0", //"Report in inches, boolean"
      $20: "0", //"Soft limits enable, boolean"
      $21: "0", //"Hard limits enable, boolean"
      $22: "1", //"Homing cycle enable, boolean"
      $23: "3", //"Homing direction invert, mask"
      $24: "100.000", //"Homing locate feed rate, mm/min"
      $25: "1000.000", //"Homing search seek rate, mm/min"
      $26: "250", //"Homing switch debounce delay, milliseconds"
      $27: "3.000", //"Homing switch pull-off distance, millimeters"
      $30: "1000", //"Maximum spindle speed, RPM"
      $31: "0", //"Minimum spindle speed, RPM"
      $32: "0", //"Maximum spindle speed, RPM"
      $100: "26.667", //"X-axis steps per millimeter"
      $101: "26.667", //"Y-axis steps per millimeter"
      $102: "199.100", //"Z-axis steps per millimeter"
      $110: "10000.000", //"X-axis maximum rate, mm/min"
      $111: "10000.000", //"Y-axis maximum rate, mm/min"
      $112: "2500.000", //"Z-axis maximum rate, mm/min"
      $120: "150.000", //"X-axis acceleration, mm/sec^2"
      $121: "150.000", //"Y-axis acceleration, mm/sec^2"
      $122: "150.000", //"Z-axis acceleration, mm/sec^2"
      $130: "824.000", //"X-axis maximum travel, millimeters"
      $131: "1280.000", //"Y-axis maximum travel, millimeters"
      $132: "122.000", //"Z-axis maximum travel, millimeters"
    }
  } else if (type == "acro55") {
    // Acro 55
    var grblParams_def = {
      $0: "10", //"Step pulse time, microseconds"
      $1: "255", //"Step idle delay, milliseconds"
      $2: "0", //"Step pulse invert, mask"
      $3: "3", //"Step direction invert, mask"
      $4: "1", //"Invert step enable pin, boolean"
      $5: "0", //"Invert limit pins, boolean"
      $6: "0", //"Invert probe pin, boolean"
      $10: "1", //"Status report options, mask"
      $11: "0.020", //"Junction deviation, millimeters"
      $12: "0.002", //"Arc tolerance, millimeters"
      $13: "0", //"Report in inches, boolean"
      $20: "0", //"Soft limits enable, boolean"
      $21: "0", //"Hard limits enable, boolean"
      $22: "1", //"Homing cycle enable, boolean"
      $23: "0", //"Homing direction invert, mask"
      $24: "100.000", //"Homing locate feed rate, mm/min"
      $25: "1000.000", //"Homing search seek rate, mm/min"
      $26: "250", //"Homing switch debounce delay, milliseconds"
      $27: "3.000", //"Homing switch pull-off distance, millimeters"
      $30: "1000", //"Maximum spindle speed, RPM"
      $31: "0", //"Minimum spindle speed, RPM"
      $32: "1", //"Maximum spindle speed, RPM"
      $100: "114.290", //"X-axis steps per millimeter"
      $101: "114.290", //"Y-axis steps per millimeter"
      $102: "114.290", //"Z-axis steps per millimeter"
      $110: "5000.000", //"X-axis maximum rate, mm/min"
      $111: "5000.000", //"Y-axis maximum rate, mm/min"
      $112: "5000.000", //"Z-axis maximum rate, mm/min"
      $120: "2000.000", //"X-axis acceleration, mm/sec^2"
      $121: "2000.000", //"Y-axis acceleration, mm/sec^2"
      $122: "2000.000", //"Z-axis acceleration, mm/sec^2"
      $130: "500.000", //"X-axis maximum travel, millimeters"
      $131: "500.000", //"Y-axis maximum travel, millimeters"
      $132: "500.000", //"Z-axis maximum travel, millimeters"
    }
  } else if (type == "acro510") {
    // Acro 510
    var grblParams_def = {
      $0: "10", //"Step pulse time, microseconds"
      $1: "255", //"Step idle delay, milliseconds"
      $2: "0", //"Step pulse invert, mask"
      $3: "3", //"Step direction invert, mask"
      $4: "1", //"Invert step enable pin, boolean"
      $5: "0", //"Invert limit pins, boolean"
      $6: "0", //"Invert probe pin, boolean"
      $10: "1", //"Status report options, mask"
      $11: "0.020", //"Junction deviation, millimeters"
      $12: "0.002", //"Arc tolerance, millimeters"
      $13: "0", //"Report in inches, boolean"
      $20: "0", //"Soft limits enable, boolean"
      $21: "0", //"Hard limits enable, boolean"
      $22: "1", //"Homing cycle enable, boolean"
      $23: "0", //"Homing direction invert, mask"
      $24: "100.000", //"Homing locate feed rate, mm/min"
      $25: "1000.000", //"Homing search seek rate, mm/min"
      $26: "250", //"Homing switch debounce delay, milliseconds"
      $27: "3.000", //"Homing switch pull-off distance, millimeters"
      $30: "1000", //"Maximum spindle speed, RPM"
      $31: "0", //"Minimum spindle speed, RPM"
      $32: "1", //"Maximum spindle speed, RPM"
      $100: "114.290", //"X-axis steps per millimeter"
      $101: "114.290", //"Y-axis steps per millimeter"
      $102: "114.290", //"Z-axis steps per millimeter"
      $110: "5000.000", //"X-axis maximum rate, mm/min"
      $111: "5000.000", //"Y-axis maximum rate, mm/min"
      $112: "5000.000", //"Z-axis maximum rate, mm/min"
      $120: "2000.000", //"X-axis acceleration, mm/sec^2"
      $121: "2000.000", //"Y-axis acceleration, mm/sec^2"
      $122: "2000.000", //"Z-axis acceleration, mm/sec^2"
      $130: "200.000", //"X-axis maximum travel, millimeters"
      $131: "200.000", //"Y-axis maximum travel, millimeters"
      $132: "200.000", //"Z-axis maximum travel, millimeters"
    }
  } else if (type == "acro1010") {
    // Acro 1010
    var grblParams_def = {
      $0: "10", //"Step pulse time, microseconds"
      $1: "255", //"Step idle delay, milliseconds"
      $2: "0", //"Step pulse invert, mask"
      $3: "3", //"Step direction invert, mask"
      $4: "1", //"Invert step enable pin, boolean"
      $5: "0", //"Invert limit pins, boolean"
      $6: "0", //"Invert probe pin, boolean"
      $10: "1", //"Status report options, mask"
      $11: "0.020", //"Junction deviation, millimeters"
      $12: "0.002", //"Arc tolerance, millimeters"
      $13: "0", //"Report in inches, boolean"
      $20: "0", //"Soft limits enable, boolean"
      $21: "0", //"Hard limits enable, boolean"
      $22: "1", //"Homing cycle enable, boolean"
      $23: "0", //"Homing direction invert, mask"
      $24: "100.000", //"Homing locate feed rate, mm/min"
      $25: "1000.000", //"Homing search seek rate, mm/min"
      $26: "250", //"Homing switch debounce delay, milliseconds"
      $27: "3.000", //"Homing switch pull-off distance, millimeters"
      $30: "1000", //"Maximum spindle speed, RPM"
      $31: "0", //"Minimum spindle speed, RPM"
      $32: "1", //"Maximum spindle speed, RPM"
      $100: "114.290", //"X-axis steps per millimeter"
      $101: "114.290", //"Y-axis steps per millimeter"
      $102: "114.290", //"Z-axis steps per millimeter"
      $110: "5000.000", //"X-axis maximum rate, mm/min"
      $111: "5000.000", //"Y-axis maximum rate, mm/min"
      $112: "5000.000", //"Z-axis maximum rate, mm/min"
      $120: "2000.000", //"X-axis acceleration, mm/sec^2"
      $121: "2000.000", //"Y-axis acceleration, mm/sec^2"
      $122: "2000.000", //"Z-axis acceleration, mm/sec^2"
      $130: "200.000", //"X-axis maximum travel, millimeters"
      $131: "200.000", //"Y-axis maximum travel, millimeters"
      $132: "200.000", //"Z-axis maximum travel, millimeters"
    }
  } else if (type == "acro1510") {
    // Acro 1510
    var grblParams_def = {
      $0: "10", //"Step pulse time, microseconds"
      $1: "255", //"Step idle delay, milliseconds"
      $2: "0", //"Step pulse invert, mask"
      $3: "3", //"Step direction invert, mask"
      $4: "1", //"Invert step enable pin, boolean"
      $5: "0", //"Invert limit pins, boolean"
      $6: "0", //"Invert probe pin, boolean"
      $10: "1", //"Status report options, mask"
      $11: "0.020", //"Junction deviation, millimeters"
      $12: "0.002", //"Arc tolerance, millimeters"
      $13: "0", //"Report in inches, boolean"
      $20: "0", //"Soft limits enable, boolean"
      $21: "0", //"Hard limits enable, boolean"
      $22: "1", //"Homing cycle enable, boolean"
      $23: "0", //"Homing direction invert, mask"
      $24: "100.000", //"Homing locate feed rate, mm/min"
      $25: "1000.000", //"Homing search seek rate, mm/min"
      $26: "250", //"Homing switch debounce delay, milliseconds"
      $27: "3.000", //"Homing switch pull-off distance, millimeters"
      $30: "1000", //"Maximum spindle speed, RPM"
      $31: "0", //"Minimum spindle speed, RPM"
      $32: "1", //"Maximum spindle speed, RPM"
      $100: "114.290", //"X-axis steps per millimeter"
      $101: "114.290", //"Y-axis steps per millimeter"
      $102: "114.290", //"Z-axis steps per millimeter"
      $110: "5000.000", //"X-axis maximum rate, mm/min"
      $111: "5000.000", //"Y-axis maximum rate, mm/min"
      $112: "5000.000", //"Z-axis maximum rate, mm/min"
      $120: "2000.000", //"X-axis acceleration, mm/sec^2"
      $121: "2000.000", //"Y-axis acceleration, mm/sec^2"
      $122: "2000.000", //"Z-axis acceleration, mm/sec^2"
      $130: "200.000", //"X-axis maximum travel, millimeters"
      $131: "200.000", //"Y-axis maximum travel, millimeters"
      $132: "200.000", //"Z-axis maximum travel, millimeters"
    }
  } else if (type == "acro1515") {
    // Acro 1515
    var grblParams_def = {
      $0: "10", //"Step pulse time, microseconds"
      $1: "255", //"Step idle delay, milliseconds"
      $2: "0", //"Step pulse invert, mask"
      $3: "3", //"Step direction invert, mask"
      $4: "1", //"Invert step enable pin, boolean"
      $5: "0", //"Invert limit pins, boolean"
      $6: "0", //"Invert probe pin, boolean"
      $10: "1", //"Status report options, mask"
      $11: "0.020", //"Junction deviation, millimeters"
      $12: "0.002", //"Arc tolerance, millimeters"
      $13: "0", //"Report in inches, boolean"
      $20: "0", //"Soft limits enable, boolean"
      $21: "0", //"Hard limits enable, boolean"
      $22: "1", //"Homing cycle enable, boolean"
      $23: "0", //"Homing direction invert, mask"
      $24: "100.000", //"Homing locate feed rate, mm/min"
      $25: "1000.000", //"Homing search seek rate, mm/min"
      $26: "250", //"Homing switch debounce delay, milliseconds"
      $27: "3.000", //"Homing switch pull-off distance, millimeters"
      $30: "1000", //"Maximum spindle speed, RPM"
      $31: "0", //"Minimum spindle speed, RPM"
      $32: "1", //"Maximum spindle speed, RPM"
      $100: "114.290", //"X-axis steps per millimeter"
      $101: "114.290", //"Y-axis steps per millimeter"
      $102: "114.290", //"Z-axis steps per millimeter"
      $110: "5000.000", //"X-axis maximum rate, mm/min"
      $111: "5000.000", //"Y-axis maximum rate, mm/min"
      $112: "5000.000", //"Z-axis maximum rate, mm/min"
      $120: "2000.000", //"X-axis acceleration, mm/sec^2"
      $121: "2000.000", //"Y-axis acceleration, mm/sec^2"
      $122: "2000.000", //"Z-axis acceleration, mm/sec^2"
      $130: "200.000", //"X-axis maximum travel, millimeters"
      $131: "200.000", //"Y-axis maximum travel, millimeters"
      $132: "200.000", //"Z-axis maximum travel, millimeters"
    }
  } else if (type == "minimill") {
    // minimill
    var grblParams_def = {
      $0: "10", //"Step pulse time, microseconds"
      $1: "255", //"Step idle delay, milliseconds"
      $2: "0", //"Step pulse invert, mask"
      $3: "0", //"Step direction invert, mask"
      $4: "1", //"Invert step enable pin, boolean"
      $5: "0", //"Invert limit pins, boolean"
      $6: "0", //"Invert probe pin, boolean"
      $10: "2", //"Status report options, mask"
      $11: "0.010", //"Junction deviation, millimeters"
      $12: "0.002", //"Arc tolerance, millimeters"
      $13: "0", //"Report in inches, boolean"
      $20: "0", //"Soft limits enable, boolean"
      $21: "0", //"Hard limits enable, boolean"
      $22: "0", //"Homing cycle enable, boolean"
      $23: "0", //"Homing direction invert, mask"
      $24: "25.000", //"Homing locate feed rate, mm/min"
      $25: "500.000", //"Homing search seek rate, mm/min"
      $26: "250", //"Homing switch debounce delay, milliseconds"
      $27: "1.000", //"Homing switch pull-off distance, millimeters"
      $30: "1000", //"Maximum spindle speed, RPM"
      $31: "0", //"Minimum spindle speed, RPM"
      $32: "0", //"Maximum spindle speed, RPM"
      $100: "199.100", //"X-axis steps per millimeter"
      $101: "199.100", //"Y-axis steps per millimeter"
      $102: "199.100", //"Z-axis steps per millimeter"
      $110: "1500.000", //"X-axis maximum rate, mm/min"
      $111: "1500.000", //"Y-axis maximum rate, mm/min"
      $112: "1500.000", //"Z-axis maximum rate, mm/min"
      $120: "50.000", //"X-axis acceleration, mm/sec^2"
      $121: "50.000", //"Y-axis acceleration, mm/sec^2"
      $122: "50.000", //"Z-axis acceleration, mm/sec^2"
      $130: "120.000", //"X-axis maximum travel, millimeters"
      $131: "120.000", //"Y-axis maximum travel, millimeters"
      $132: "60.000", //"Z-axis maximum travel, millimeters"
    }
  } else if (type == "cbeam") {
    // C-Beam Machine
    var grblParams_def = {
      $0: "10", //"Step pulse time, microseconds"
      $1: "255", //"Step idle delay, milliseconds"
      $2: "0", //"Step pulse invert, mask"
      $3: "6", //"Step direction invert, mask"
      $4: "1", //"Invert step enable pin, boolean"
      $5: "0", //"Invert limit pins, boolean"
      $6: "0", //"Invert probe pin, boolean"
      $10: "3", //"Status report options, mask"
      $11: "0.020", //"Junction deviation, millimeters"
      $12: "0.002", //"Arc tolerance, millimeters"
      $13: "0", //"Report in inches, boolean"
      $20: "0", //"Soft limits enable, boolean"
      $21: "0", //"Hard limits enable, boolean"
      $22: "0", //"Homing cycle enable, boolean"
      $23: "0", //"Homing direction invert, mask"
      $24: "2000.000", //"Homing locate feed rate, mm/min"
      $25: "1000.000", //"Homing search seek rate, mm/min"
      $26: "250", //"Homing switch debounce delay, milliseconds"
      $27: "1.000", //"Homing switch pull-off distance, millimeters"
      $30: "1000", //"Maximum spindle speed, RPM"
      $31: "0", //"Minimum spindle speed, RPM"
      $32: "0", //"Maximum spindle speed, RPM"
      $100: "199.100", //"X-axis steps per millimeter"
      $101: "199.100", //"Y-axis steps per millimeter"
      $102: "199.100", //"Z-axis steps per millimeter"
      $110: "1000.000", //"X-axis maximum rate, mm/min"
      $111: "1000.000", //"Y-axis maximum rate, mm/min"
      $112: "1000.000", //"Z-axis maximum rate, mm/min"
      $120: "100.000", //"X-axis acceleration, mm/sec^2"
      $121: "100.000", //"Y-axis acceleration, mm/sec^2"
      $122: "100.000", //"Z-axis acceleration, mm/sec^2"
      $130: "270.000", //"X-axis maximum travel, millimeters"
      $131: "270.000", //"Y-axis maximum travel, millimeters"
      $132: "80.000", //"Z-axis maximum travel, millimeters"
    }
  } else if (type == "cbeamxl") {
    // C-Beam XL:
    var grblParams_def = {
      $0: "10", //"Step pulse time, microseconds"
      $1: "255", //"Step idle delay, milliseconds"
      $2: "0", //"Step pulse invert, mask"
      $3: "6", //"Step direction invert, mask"
      $4: "1", //"Invert step enable pin, boolean"
      $5: "0", //"Invert limit pins, boolean"
      $6: "0", //"Invert probe pin, boolean"
      $10: "3", //"Status report options, mask"
      $11: "0.020", //"Junction deviation, millimeters"
      $12: "0.002", //"Arc tolerance, millimeters"
      $13: "0", //"Report in inches, boolean"
      $20: "0", //"Soft limits enable, boolean"
      $21: "0", //"Hard limits enable, boolean"
      $22: "0", //"Homing cycle enable, boolean"
      $23: "0", //"Homing direction invert, mask"
      $24: "2000.000", //"Homing locate feed rate, mm/min"
      $25: "1000.000", //"Homing search seek rate, mm/min"
      $26: "250", //"Homing switch debounce delay, milliseconds"
      $27: "1.000", //"Homing switch pull-off distance, millimeters"
      $30: "1000", //"Maximum spindle speed, RPM"
      $31: "0", //"Minimum spindle speed, RPM"
      $32: "0", //"Maximum spindle speed, RPM"
      $100: "199.100", //"X-axis steps per millimeter"
      $101: "199.100", //"Y-axis steps per millimeter"
      $102: "199.100", //"Z-axis steps per millimeter"
      $110: "1000.000", //"X-axis maximum rate, mm/min"
      $111: "1000.000", //"Y-axis maximum rate, mm/min"
      $112: "1000.000", //"Z-axis maximum rate, mm/min"
      $120: "100.000", //"X-axis acceleration, mm/sec^2"
      $121: "100.000", //"Y-axis acceleration, mm/sec^2"
      $122: "100.000", //"Z-axis acceleration, mm/sec^2"
      $130: "200.000", //"X-axis maximum travel, millimeters"
      $131: "200.000", //"Y-axis maximum travel, millimeters"
      $132: "200.000", //"Z-axis maximum travel, millimeters"
    }
  } else if (type == "leadmachine1010") {
    // Leadmachine 1010
    var grblParams_def = {
      $0: "10", //"Step pulse time, microseconds"
      $1: "255", //"Step idle delay, milliseconds"
      $2: "0", //"Step pulse invert, mask"
      $3: "4", //"Step direction invert, mask"
      $4: "1", //"Invert step enable pin, boolean"
      $5: "0", //"Invert limit pins, boolean"
      $6: "0", //"Invert probe pin, boolean"
      $10: "1", //"Status report options, mask"
      $11: "0.020", //"Junction deviation, millimeters"
      $12: "0.002", //"Arc tolerance, millimeters"
      $13: "0", //"Report in inches, boolean"
      $20: "0", //"Soft limits enable, boolean"
      $21: "0", //"Hard limits enable, boolean"
      $22: "1", //"Homing cycle enable, boolean"
      $23: "3", //"Homing direction invert, mask"
      $24: "100.000", //"Homing locate feed rate, mm/min"
      $25: "1000.000", //"Homing search seek rate, mm/min"
      $26: "250", //"Homing switch debounce delay, milliseconds"
      $27: "3.000", //"Homing switch pull-off distance, millimeters"
      $30: "1000", //"Maximum spindle speed, RPM"
      $31: "0", //"Minimum spindle speed, RPM"
      $32: "0", //"Maximum spindle speed, RPM"
      $100: "199.100", //"X-axis steps per millimeter"
      $101: "199.100", //"Y-axis steps per millimeter"
      $102: "199.100", //"Z-axis steps per millimeter"
      $110: "2500.000", //"X-axis maximum rate, mm/min"
      $111: "2500.000", //"Y-axis maximum rate, mm/min"
      $112: "2500.000", //"Z-axis maximum rate, mm/min"
      $120: "150.000", //"X-axis acceleration, mm/sec^2"
      $121: "150.000", //"Y-axis acceleration, mm/sec^2"
      $122: "150.000", //"Z-axis acceleration, mm/sec^2"
      $130: "824", //"X-axis maximum travel, millimeters"
      $131: "780", //"Y-axis maximum travel, millimeters"
      $132: "122", //"Z-axis maximum travel, millimeters"
    }
  } else if (type == "leadmachine55") {
    // Leadmachine 55
    var grblParams_def = {
      $0: "10", //"Step pulse time, microseconds"
      $1: "255", //"Step idle delay, milliseconds"
      $2: "0", //"Step pulse invert, mask"
      $3: "4", //"Step direction invert, mask"
      $4: "1", //"Invert step enable pin, boolean"
      $5: "0", //"Invert limit pins, boolean"
      $6: "0", //"Invert probe pin, boolean"
      $10: "1", //"Status report options, mask"
      $11: "0.020", //"Junction deviation, millimeters"
      $12: "0.002", //"Arc tolerance, millimeters"
      $13: "0", //"Report in inches, boolean"
      $20: "0", //"Soft limits enable, boolean"
      $21: "0", //"Hard limits enable, boolean"
      $22: "1", //"Homing cycle enable, boolean"
      $23: "3", //"Homing direction invert, mask"
      $24: "100.000", //"Homing locate feed rate, mm/min"
      $25: "1000.000", //"Homing search seek rate, mm/min"
      $26: "250", //"Homing switch debounce delay, milliseconds"
      $27: "3.000", //"Homing switch pull-off distance, millimeters"
      $30: "1000", //"Maximum spindle speed, RPM"
      $31: "0", //"Minimum spindle speed, RPM"
      $32: "0", //"Maximum spindle speed, RPM"
      $100: "199.100", //"X-axis steps per millimeter"
      $101: "199.100", //"Y-axis steps per millimeter"
      $102: "199.100", //"Z-axis steps per millimeter"
      $110: "2500.000", //"X-axis maximum rate, mm/min"
      $111: "2500.000", //"Y-axis maximum rate, mm/min"
      $112: "2500.000", //"Z-axis maximum rate, mm/min"
      $120: "150.000", //"X-axis acceleration, mm/sec^2"
      $121: "150.000", //"Y-axis acceleration, mm/sec^2"
      $122: "150.000", //"Z-axis acceleration, mm/sec^2"
      $130: "333", //"X-axis maximum travel, millimeters"
      $131: "325", //"Y-axis maximum travel, millimeters"
      $132: "85", //"Z-axis maximum travel, millimeters"
    }
  }
  for (var key in grblParams_def) {
    if (grblParams_def.hasOwnProperty(key)) {
      var j = key.substring(1)
      var newVal = $("#val-" + j + "-input").val();
      // console.log("$" + j + " = " + newVal)
      $("#val-" + j + "-input").val(parseFloat(grblParams_def[key]))
    }
  }
  checkifchanged();
  enableLimits(); // Enable or Disable
  displayDirInvert();
  setMachineButton(type);
  checkifchanged()
};

function setMachineButton(type) {
  if (type == "sphinx55") {
    template = `<img src="img/mch/` + type + `.png"/>  OpenBuilds Sphinx 55`
  } else if (type == "sphinx1050") {
    template = `<img src="img/mch/` + type + `.png"/>  OpenBuilds Sphinx 1050`
  } else if (type == "workbee1050") {
    template = `<img src="img/mch/` + type + `.png"/>  OpenBuilds Workbee 1050`
  } else if (type == "workbee1010") {
    template = `<img src="img/mch/` + type + `.png"/>  OpenBuilds Workbee 1010`
  } else if (type == "workbee1510") {
    template = `<img src="img/mch/` + type + `.png"/>  OpenBuilds Workbee 1510`
  } else if (type == "acro55") {
    template = `<img src="img/mch/` + type + `.png"/>  OpenBuilds Acro 55`
  } else if (type == "acro510") {
    template = `<img src="img/mch/` + type + `.png"/>  OpenBuilds Acro 510`
  } else if (type == "acro1010") {
    template = `<img src="img/mch/` + type + `.png"/>  OpenBuilds Acro 1010`
  } else if (type == "acro1510") {
    template = `<img src="img/mch/` + type + `.png"/>  OpenBuilds Acro 1510`
  } else if (type == "acro1515") {
    template = `<img src="img/mch/` + type + `.png"/>  OpenBuilds Acro 1515`
  } else if (type == "minimill") {
    template = `<img src="img/mch/` + type + `.png"/>  OpenBuilds MiniMill`
  } else if (type == "cbeam") {
    template = `<img src="img/mch/` + type + `.png"/>  OpenBuilds C-Beam Machine`
  } else if (type == "cbeamxl") {
    template = `<img src="img/mch/` + type + `.png"/>  OpenBuilds C-Beam XL`
  } else if (type == "leadmachine55") {
    template = `<img src="img/mch/` + type + `.png"/>  OpenBuilds Lead Machine 55`
  } else if (type == "leadmachine1010") {
    template = `<img src="img/mch/` + type + `.png"/>  OpenBuilds Lead Machine 1010`
  } else {
    template = `<img src="img/mch/sphinx55.png"/>  Select Machine`
  }
  $('#context_toggle2').html(template);
};