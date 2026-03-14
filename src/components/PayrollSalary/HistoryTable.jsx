import React from 'react';
import { Download } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Helper function to convert numbers to words
const numberToWords = (num) => {
  const single = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const double = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  
  if (num === 0) return 'Zero';
  
  const convertTens = (num) => {
    if (num < 10) return single[num];
    if (num >= 10 && num < 20) return double[num - 10];
    if (num >= 20) {
      return tens[Math.floor(num / 10)] + (num % 10 ? ' ' + single[num % 10] : '');
    }
  };
  
  const convertHundreds = (num) => {
    if (num > 99) {
      return single[Math.floor(num / 100)] + ' Hundred' + (num % 100 ? ' and ' + convertTens(num % 100) : '');
    } else {
      return convertTens(num);
    }
  };
  
  const numStr = num.toString();
  if (numStr.length > 3) {
    return 'Amount in words';
  } else {
    return convertHundreds(num);
  }
};

const HistoryTable = ({ data = [], onDownloadPayslip }) => {
 const handleDownloadPayslip = async (employee) => {
  // Create a temporary div to hold the payslip content
  const content = document.createElement('div');
  content.style.position = 'absolute';
  content.style.left = '-9999px';
  content.style.padding = '0';
  content.style.backgroundColor = 'white';
  content.style.width = '210mm';
  content.style.margin = '0 auto';
  content.style.fontFamily = 'Arial, sans-serif';
  content.style.fontSize = '12px';
  
  // Helper function to format currency
  const formatCurrency = (amount) => {
    return parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  // Calculate derived values
  const basicPay = employee.basicPay || (employee.creditAmount * 0.6);
  const hra = employee.hra || (employee.creditAmount * 0.3);
  const otherAllowances = employee.otherAllowances || 0;
  const professionalTax = employee.professionalTax || 200;
  const tds = employee.tds || 0;
const netPay = employee.creditAmount - 
  (professionalTax + 
   tds + 
   (employee.pf || 0) + 
   (employee.esi || 0) + 
   (employee.loanEmi || 0) + 
   (employee.lateAttendanceDeduction || 0) + 
   (employee.leaveDeduction || 0));
  // Add content to the div
  content.innerHTML = `
    <div style="width: 100%; max-width: 800px; margin: 0 auto; padding: 15px; box-sizing: border-box;">
      <!-- Header with Logo and Title -->
    <div style="text-align: center; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #f0f0f0;">
      <div style="margin-bottom: 5px;">
        <img 
          src="/src/assets/logo.webp" 
          alt="Company Logo" 
          style="height: 50px; margin: 0 auto; display: block;" 
        />
      </div>
      <div style="font-size: 20px; font-weight: bold; color: #000; margin-bottom: 5px; letter-spacing: 0.5px;">
        TECH CLOUD ERP SOFTWARE PVT. LTD.
      </div>
      <div style="font-size: 11px; color: #000; margin-bottom: 5px;">
        Plot No. 241, 3rd Floor, VVG Elite, Kaviri Hills, Madhapur, Hyderabad, Telangana - 500081.
      </div>
    </div>
      <!-- Pay Period Details Table -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 11px; border: 1px solid #BDBDDC;">
        <tr>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px; width: 15%; background-color: #EBEBFF;"><strong>Pay Period</strong></td>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px; width: 25%;">01/11/2023 - 30/11/2023</td>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px; width: 15%; background-color: #EBEBFF;"><strong>Date of Payment</strong></td>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px; width: 20%;">${new Date().toLocaleDateString('en-IN')}</td>
         
        </tr>
        <tr>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px; width: 10%; background-color: #EBEBFF;"><strong>Paid Days</strong></td>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px; width: 15%;">30/31</td>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;"><strong>LOP</strong></td>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px;">0</td>
        </tr>
      </table>

      <!-- Employee Details Table -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 11px; border: 1px solid #ddd;">
        <tr>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px; width: 15%; background-color: #EBEBFF;"><strong>Name</strong></td>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px; width: 25%;">${employee.name || ''}</td>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;"><strong>Bank Name</strong></td>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px;">${employee.bankName || 'HDFC Bank'}</td>
           <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;"><strong>Location</strong></td>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px;">${employee.location || 'Chennai'}</td>
        </tr>
        <tr>
           <td style="border: 1px solid #BDBDDC; padding: 6px 10px; width: 15%; background-color: #EBEBFF;"><strong>Employee ID</strong></td>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px; width: 20%;">${employee.empId || ''}</td>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;"><strong>IFSC Code</strong></td>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px;">${employee.ifsc || 'HDFC0001234'}</td>
         
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;"><strong>Date of Joining</strong></td>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px;">${employee.dateOfJoining || '01/01/2020'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px; width: 10%; background-color: #EBEBFF;"><strong>Department</strong></td>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px; width: 15%;">${employee.department || ''}</td>
            
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;"><strong>Account Number</strong></td>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px;" >${employee.accountNumber || 'XXXXXXXXXXXX1234'}</td>
          
             <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;"><strong>Payment Method</strong></td>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px;">Bank Transfer</td>
        </tr>
        <tr>
      

          <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;"><strong>Designation</strong></td>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px;">${employee.designation || 'Employee'}</td>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;"><strong>PAN</strong></td>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px;">${employee.pan || 'ABCDE1234F'}</td>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;"><strong>UAN</strong></td>
          <td style="border: 1px solid #BDBDDC; padding: 6px 10px;">${employee.uan || '100123456789'}</td>
        </tr>
      </table>

      <!-- Earnings and Deductions -->
     <div style="display: flex; justify-content: space-between; margin-bottom: 15px; gap: 15px;">
  <!-- Earnings -->
  <div style="flex: 1; min-width: 0;">
    <div style="background-color: #EBEBFF; border: 1px solid #BDBDDC; color: #000; padding: 6px 10px; font-weight: bold; font-size: 12px; text-align: center; letter-spacing: 0.5px;">
      Earnings
    </div>
    <table style="width: 100%; border-collapse: collapse; font-size: 11px; border: 1px solid #BDBDDC; border-top: none;">
      <tr>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF; width: 70%;">Basic</td>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; text-align: right;">${formatCurrency(basicPay)}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;">HRA</td>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; text-align: right;">${formatCurrency(hra)}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;">Conveyance Allowance</td>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; text-align: right;">${formatCurrency(employee.conveyanceAllowance || 0)}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;">Medical Allowance</td>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; text-align: right;">${formatCurrency(employee.medicalAllowance || 0)}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;">Special Allowance</td>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; text-align: right;">${formatCurrency(employee.specialAllowance || 0)}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;">Performance Bonus</td>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; text-align: right;">${formatCurrency(employee.performanceBonus || 0)}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;">Overtime Pay</td>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; text-align: right;">${formatCurrency(employee.overtimePay || 0)}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #BDBDDC; padding: 8px 10px; background-color: #EBEBFF; font-weight: bold;">Total Earnings</td>
        <td style="border: 1px solid #BDBDDC; padding: 8px 10px; text-align: right; font-weight: bold; background-color: #EBEBFF;">${formatCurrency(employee.creditAmount)}</td>
      </tr>
    </table>
  </div>

        <!-- Deductions -->
      <div style="flex: 1; min-width: 0;">
    <div style="background-color: #EBEBFF; border: 1px solid #BDBDDC; color: #000; padding: 6px 10px; font-weight: bold; font-size: 12px; text-align: center; letter-spacing: 0.5px;">
      Deductions
    </div>
    <table style="width: 100%; border-collapse: collapse; font-size: 11px; border: 1px solid #BDBDDC; border-top: none;">
      <tr>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF; width: 70%;">Professional Tax</td>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; text-align: right;">${formatCurrency(professionalTax)}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;">TDS</td>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; text-align: right;">${formatCurrency(tds)}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;">Provident Fund (PF)</td>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; text-align: right;">${formatCurrency(employee.pf || 0)}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;">ESI</td>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; text-align: right;">${formatCurrency(employee.esi || 0)}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;">Loan EMI</td>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; text-align: right;">${formatCurrency(employee.loanEmi || 0)}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;">Late Attendance</td>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; text-align: right;">${formatCurrency(employee.lateAttendanceDeduction || 0)}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; background-color: #EBEBFF;">Leave Deduction</td>
        <td style="border: 1px solid #BDBDDC; padding: 6px 10px; text-align: right;">${formatCurrency(employee.leaveDeduction || 0)}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #BDBDDC; padding: 8px 10px; background-color: #EBEBFF; font-weight: bold;">Total Deductions</td>
        <td style="border: 1px solid #BDBDDC; padding: 8px 10px; text-align: right; font-weight: bold; background-color: #EBEBFF;">${formatCurrency(professionalTax + tds + (employee.pf || 0) + (employee.esi || 0) + (employee.loanEmi || 0) + (employee.lateAttendanceDeduction || 0) + (employee.leaveDeduction || 0))}</td>
      </tr>
    </table>
  </div>
</div>
      <!-- Net Pay -->
      <div style="text-align: right; margin-bottom: 20px;">
        <div style="display: inline-block; text-align: left; border: 1px solid #BDBDDC; width: 300px;">
          <div style="background-color: #EBEBFF; color: #000; padding: 8px 12px; font-weight: bold; font-size: 12px; letter-spacing: 0.5px;">
            Net Pay
          </div>
          <div style="padding: 10px 12px; text-align: right; font-size: 16px; font-weight: bold; color: #000; background-color: #EBEBFF;">
            ₹${formatCurrency(netPay)}
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div style="text-align: center; color: #666; font-size: 10px; margin-top: 30px; padding-top: 10px; border-top: 1px solid #eee; font-style: italic;">
        This is system generated Pay slip and doesn't require signature
      </div>
    </div>
  `;

  // Add the content to the body
  document.body.appendChild(content);

  try {
    // Convert the content to canvas
    const canvas = await html2canvas(content, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      logging: false,
    });
    
    // Create PDF
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210; // A4 width in mm
    const imgHeight = canvas.height * imgWidth / canvas.width;
    
    // Add image to PDF
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    
    // Generate and download the PDF
    pdf.save(`Payslip_${employee.empId || 'employee'}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Failed to generate PDF. Please try again.');
  } finally {
    // Clean up
    document.body.removeChild(content);
  }
}; 
  return (
    <div className="neu-card rounded-2xl sm:rounded-3xl overflow-hidden">
      <div className="overflow-x-auto">
        <div className="max-h-96 overflow-y-auto">
          <table className="w-full min-w-[900px] border border-[#D0E4F5] text-sm">
            {/* Your existing table header and rows */}
            <thead className="sticky top-0">
              <tr className="text-center text-[#333333] text-xs sm:text-sm font-semibold">
                <th className="bg-[#E9F5FF] border-b border-r border-[#D0E4F5] py-3" colSpan={3}>
                  Employee Details
                </th>
                <th className="bg-[#E9F5FF] border-b border-r border-[#D0E4F5] py-3" colSpan={3}>
                  Bank Details
                </th>
                <th className="bg-[#FFF3E0] border-b border-[#E7D3B5] py-3" colSpan={3}>
                  Payment Details
                </th>
              </tr>
              <tr className="bg-white text-left text-[11px] sm:text-xs text-[#555555]">
                <th className="border-t border-b border-r border-[#D0E4F5] px-4 py-2 font-medium">Employee ID</th>
                <th className="border-t border-b border-r border-[#D0E4F5] px-4 py-2 font-medium">Name</th>
                <th className="border-t border-b border-r border-[#D0E4F5] px-4 py-2 font-medium">Department</th>
                <th className="border-t border-b border-r border-[#D0E4F5] px-4 py-2 font-medium">Bank Name</th>
                <th className="border-t border-b border-r border-[#D0E4F5] px-4 py-2 font-medium">Account Number</th>
                <th className="border-t border-b border-r border-[#D0E4F5] px-4 py-2 font-medium">IFSC Code</th>
                <th className="border-t border-b border-r border-[#E7D3B5] px-4 py-2 font-medium">Date of Payment</th>
                <th className="border-t border-b border-r border-[#E7D3B5] px-4 py-2 font-medium">Credit Amount</th>
                <th className="border-t border-b border-[#E7D3B5] px-4 py-2 font-medium text-center">Payslip</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={row.id}
                  className={index % 2 === 0 ? 'bg-white hover:bg-[#F5FBFF]' : 'bg-[#F9FCFF] hover:bg-[#F5FBFF]'}
                >
                  <td className="border-b border-r border-[#D0E4F5] px-4 py-2 text-xs sm:text-sm text-[#333333]">
                    {row.empId}
                  </td>
                  <td className="border-b border-r border-[#D0E4F5] px-4 py-2 text-xs sm:text-sm text-[#333333]">
                    {row.name}
                  </td>
                  <td className="border-b border-r border-[#D0E4F5] px-4 py-2 text-xs sm:text-sm text-[#333333]">
                    {row.department}
                  </td>
                  <td className="border-b border-r border-[#D0E4F5] px-4 py-2 text-xs sm:text-sm text-[#333333]">
                    {row.bankName}
                  </td>
                  <td className="border-b border-r border-[#D0E4F5] px-4 py-2 text-xs sm:text-sm text-[#333333]">
                    {row.accountNumber}
                  </td>
                  <td className="border-b border-r border-[#D0E4F5] px-4 py-2 text-xs sm:text-sm text-[#333333]">
                    {row.ifsc}
                  </td>
                  <td className="border-b border-r border-[#E7D3B5] px-4 py-2 text-xs sm:text-sm text-[#333333]">
                    {row.dateOfPayment}
                  </td>
                  <td className="border-b border-r border-[#E7D3B5] px-4 py-2 text-xs sm:text-sm text-[#333333]">
                    {row.creditAmount}
                  </td>
                  <td className="border-b border-[#E7D3B5] px-4 py-2 text-center">
                    <button
                      type="button"
                      onClick={() => handleDownloadPayslip(row)}
                      className="inline-flex items-center gap-2 bg-[#CA2030] hover:bg-[#a71a27] text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full shadow-sm transition-colors duration-150"
                    >
                      <span>Download</span>
                      <Download className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HistoryTable;