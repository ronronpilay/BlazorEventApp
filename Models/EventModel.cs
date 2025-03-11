namespace BlazorEventApp.Models
{
    public class EventModel
    {
        public string Title { get; set; } = string.Empty;  // ✅ Add this property
        public DateTime Date { get; set; } = DateTime.Now;
        public string Location { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public List<AttendeeModel> Attendees { get; set; } = new();  // ✅ Ensure attendees list is initialized
    }
}
